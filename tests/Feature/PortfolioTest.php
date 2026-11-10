<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use App\Models\Project;
use Database\Seeders\PortfolioSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(PortfolioSeeder::class);
    }

    /**
     * Test homepage loads successfully with status 200.
     */
    public function test_homepage_loads_successfully(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    /**
     * Test Padma TV project detail page loads with 200 OK.
     */
    public function test_padma_tv_page_loads(): void
    {
        $response = $this->get('/work/padma-tv');
        $response->assertStatus(200);
    }

    /**
     * Test Tour Partner flagship page loads with 200 OK.
     */
    public function test_tour_partner_page_loads(): void
    {
        $response = $this->get('/work/tour-partner');
        $response->assertStatus(200);
    }

    /**
     * Test all project detail pages load with 200 OK.
     */
    public function test_all_individual_project_pages_load(): void
    {
        $slugs = [
            'padma-tv',
            'tour-partner',
            'health-assistant',
            'ibw-calculator',
            'auth-ui',
            'bmi-calculator',
        ];

        foreach ($slugs as $slug) {
            $response = $this->get('/work/' . $slug);
            $response->assertStatus(200);
        }
    }

    /**
     * Test full photo gallery loads with 200 OK.
     */
    public function test_gallery_page_loads(): void
    {
        $response = $this->get('/gallery');
        $response->assertStatus(200);
    }

    /**
     * Test CV viewer route returns 200 OK with PDF content-type.
     */
    public function test_cv_route_loads(): void
    {
        $response = $this->get('/resume');
        $response->assertStatus(200);
        $response->assertHeader('Content-Type', 'application/pdf');
    }

    /**
     * Test contact form validation rejects invalid data.
     */
    public function test_contact_form_validation(): void
    {
        $response = $this->post('/contact', [
            'name' => '',
            'email' => 'invalid-email',
            'message' => 'too short',
        ]);

        $response->assertSessionHasErrors(['name', 'email', 'message']);
    }

    /**
     * Test valid contact form submission stores message in database.
     */
    public function test_contact_form_submission_success(): void
    {
        $payload = [
            'name' => 'Alex Morgan',
            'email' => 'alex@example.com',
            'subject' => 'Mobile App Collaboration',
            'message' => 'Hi Atik, we would love to collaborate on a Flutter mobile app project!',
        ];

        $response = $this->post('/contact', $payload);

        $response->assertSessionHasNoErrors();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('contact_messages', [
            'email' => 'alex@example.com',
            'name' => 'Alex Morgan',
        ]);
    }
}
