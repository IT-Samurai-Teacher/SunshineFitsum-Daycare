import { Card, CardContent } from "@/components/ui/card"

export function ScheduleSection() {
  return (
    <section id="schedule" className="sunshine-section bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-secondary/10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Daily <span className="colorful-text-primary">Rays</span>
        </h2>
        <p className="section-subtitle">
          Our structured daily routine provides children with a sense of security and predictability, while still
          allowing flexibility to meet each child's individual needs.
        </p>

        <Card className="sunshine-card border-t-4 border-t-primary max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-xl font-fredoka mb-6 text-center">
              Typical <span className="colorful-text-secondary">Daily</span> Activities
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-muted">
                    <th className="py-3 text-left font-fredoka">⏰ Time</th>
                    <th className="py-3 text-left font-fredoka">🌈 Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">6:00 – 7:30 AM</td>
                    <td className="py-3">👋 Arrival, warm greetings, light breakfast for early arrivals</td>
                  </tr>
                  <tr className="border-b border-muted/50 bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">7:30 – 8:30 AM</td>
                    <td className="py-3">🧩 Free play & sensory stations</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">8:30 – 9:30 AM</td>
                    <td className="py-3">🎨 Morning class time: group activities, dramatic play, art, or STEM</td>
                  </tr>
                  <tr className="border-b border-muted/50 bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">9:30 – 10:15 AM</td>
                    <td className="py-3">📚 Circle Time: stories, music & movement, calendar, weather talk</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">10:15 – 10:30 AM</td>
                    <td className="py-3">🍎 AM Snack</td>
                  </tr>
                  <tr className="border-b border-muted/50 bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">10:30 – 11:30 AM</td>
                    <td className="py-3">🌱 Outdoor/Garden Play & Gross Motor Activities</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">11:30 – 12:15 PM</td>
                    <td className="py-3">🍽️ Handwashing & lunch</td>
                  </tr>
                  <tr className="border-b border-muted/50 bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">12:15 – 12:45 PM</td>
                    <td className="py-3">🧹 Clean-up & transition to rest time</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">12:45 – 2:30 PM</td>
                    <td className="py-3">😴 Nap or Quiet Time (books, puzzles for non-nappers)</td>
                  </tr>
                  <tr className="border-b border-muted/50 bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">2:30 – 3:00 PM</td>
                    <td className="py-3">🍌 PM Snack</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">3:00 – 4:00 PM</td>
                    <td className="py-3">🏃 Outdoor Play, group games, nature walk, or creative stations</td>
                  </tr>
                  <tr className="border-b border-muted/50 bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">4:00 – 5:00 PM</td>
                    <td className="py-3">🧠 Brain games, enrichment activities, and pick-up window</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="py-3 pr-4 align-top whitespace-nowrap font-medium">5:00 – 5:30 PM</td>
                    <td className="py-3">👋 Free play, optional evening snack, and end-of-day goodbyes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-xl text-center">
              <p className="flex items-center justify-center gap-2">
                <span className="text-2xl">🍼</span>
                <span>
                  Infant schedules are fully individualized and follow each baby's unique feeding, sleeping, and care
                  routine.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-fredoka mb-4 text-center">
              Our Approach to <span className="colorful-text-blue">Daily Activities</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h4 className="font-fredoka mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2 text-sm">
                    1
                  </span>
                  Balance
                </h4>
                <p className="text-sm text-muted-foreground">
                  We balance active and quiet times, structured and free play, individual and group activities.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h4 className="font-fredoka mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-2 text-sm">
                    2
                  </span>
                  Flexibility
                </h4>
                <p className="text-sm text-muted-foreground">
                  While we follow a consistent schedule, we adapt to children's interests and needs each day.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <h4 className="font-fredoka mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#70D6FF]/20 flex items-center justify-center mr-2 text-sm">
                    3
                  </span>
                  Intentionality
                </h4>
                <p className="text-sm text-muted-foreground">
                  Every activity is purposefully designed to support development across multiple domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scalloped divider */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
        <div
          className="w-full h-16"
          style={{
            backgroundImage: "radial-gradient(circle at 10px 0, transparent 12px, #FFF7E8 12px)",
            backgroundSize: "20px 16px",
            backgroundRepeat: "repeat-x",
          }}
        ></div>
      </div>
    </section>
  )
}
