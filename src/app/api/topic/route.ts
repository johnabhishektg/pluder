import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { TopicValidator } from "@/lib/validators/topic";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = TopicValidator.parse(body);

    const topicExists = await prisma.topic.findFirst({
      where: {
        name,
      },
    });

    if (topicExists) {
      return new Response("Topic already exists", { status: 409 });
    }

    const topic = await prisma.topic.create({
      data: {
        name,
        creatorId: session.user.id,
      },
    });

    await prisma.subscription.create({
      data: {
        userId: session.user.id,
        topicId: topic.id,
      },
    });

    return new Response(topic.name);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not create topic", { status: 500 });
  }
}
