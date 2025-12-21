import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }

    // TODO: Replace with your Follow Up Boss webhook endpoint
    // Example webhook URL: https://api.followupboss.com/v1/webhooks/leads
    const webhookUrl = process.env.FOLLOW_UP_BOSS_WEBHOOK_URL || '';
    
    if (!webhookUrl) {
      // In development, log the lead data
      console.log('Lead submission (webhook not configured):', body);
      
      // Return success for development
      return NextResponse.json(
        { 
          success: true, 
          message: 'Lead received (webhook not configured - check console logs)',
          lead: body 
        },
        { status: 200 }
      );
    }

    // Forward to Follow Up Boss webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add your Follow Up Boss API key if required
        // 'Authorization': `Bearer ${process.env.FOLLOW_UP_BOSS_API_KEY}`,
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message || '',
        source: body.source || 'website',
        propertyInterest: body.propertyInterest || '',
        timestamp: body.timestamp || new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.statusText}`);
    }

    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}

