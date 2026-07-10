// app/api/enquiry/route.js
// Receives lead form submissions. Currently logs and returns success.
// TODO: connect to your database (Postgres/Supabase) and/or send an
// email/WhatsApp/SMS notification to the admin, and store in Sanity/Payload
// CMS "Enquiries" collection referenced in FRD section 23 (Admin Dashboard).

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, city, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // TODO: persist to database, e.g.:
    // await db.enquiries.create({ data: { name, phone, city, service, message, createdAt: new Date() } });

    // TODO: notify admin, e.g. via WhatsApp Business API, SMS, or email.

    console.log("New enquiry:", { name, phone, city, service, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
