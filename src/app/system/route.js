export async function GET() {
  return Response.json({
    system: 'ok',
    AJC: process.env.AJC ?? '___'
  })
}