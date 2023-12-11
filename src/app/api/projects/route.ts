import { NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.projects.findMany();

    return NextResponse.json(
      {
        message: 'Projects fetched successfully',
        data: projects,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching projects' },
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

    const project = await prisma.projects.create({
      data: {
        ...payload,
      },
    });

    return NextResponse.json(
      {
        message: 'Project created successfully',
        data: project,
      },
      {
        status: 201,
      }
    );
  } catch (error) {}
}
