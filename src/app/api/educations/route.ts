import { NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const educations = await prisma.educations.findMany();

    return NextResponse.json(
      {
        message: 'Educations fetched successfully',
        data: educations,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching educations' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const education = await prisma.educations.create({
      data: {
        ...payload,
      },
    });

    return NextResponse.json(
      {
        message: 'Education created successfully',
        data: education,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating education' },
      { status: 500 }
    );
  }
}
