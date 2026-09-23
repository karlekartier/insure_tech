import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      location,
      insuranceCategory,
      organization,
      services,
      category,
      message,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required contact fields (fullName, email, phone)." },
        { status: 400 }
      );
    }

    // Generate unique reference tracking ID
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `ITS-${randomSuffix}`;

    // Log the request for server audit
    console.log(`[Service Request Logged] ${referenceId}:`, {
      fullName,
      email,
      phone,
      location: location || "Not specified",
      insuranceCategory: insuranceCategory || category || services || "General Inquiry",
      message: message || "No additional message",
      organization: organization || "Individual",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Your service request has been logged successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
