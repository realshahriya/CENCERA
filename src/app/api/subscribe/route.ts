import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Send Telegram Notification
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatIds = [
            process.env.TELEGRAM_CHAT_ID_1,
            process.env.TELEGRAM_CHAT_ID_2
        ].filter(Boolean);

        if (botToken && chatIds.length > 0) {
            const message = `🔔 *New Subscription Alert*\n\n📧 Email: \`${email}\`\n\n🚀 Source: Cencera Website`;

            await Promise.all(chatIds.map(chatId =>
                fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'Markdown'
                    })
                }).catch(err => console.error('Telegram notification failed:', err))
            ));
        }

        // Here you would typically save to database or send to email service
        // console.log(`New subscriber: ${email}`);

        return NextResponse.json(
            { message: 'Successfully subscribed' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
