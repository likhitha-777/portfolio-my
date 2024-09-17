import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/c/1e67-34f3-4481-bfde`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from DummyJSON');
    }
    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
