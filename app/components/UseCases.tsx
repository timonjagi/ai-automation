import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">Real World Applications</h2>
      <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16">
        Automation solving real problems across industries.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Real Estate */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:building" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">REAL ESTATE</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Speed-to-Lead Caller</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Leads turn cold if not called within 5 minutes. Agents sleep or get busy.
              <br /><br />
              <strong>Solution:</strong> An automation triggers instantly when a form is submitted, qualifies the buyer, and books a viewing on the agent&apos;s calendar.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Hi, I saw you were interested in the downtown property. Are you looking to move in the next 30 days?&quot;
            </div>
          </div>
        </GlassCard>

        {/* E-Commerce */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:shopping-bag" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">E-COMMERCE / SUPPORT</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Order Status &amp; Recovery</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> CS teams overwhelmed with &quot;Where is my order?&quot; tickets.
              <br /><br />
              <strong>Solution:</strong> A WhatsApp &amp; voice bot connected to your store answers status queries instantly and reaches out to abandoned checkouts with recovery offers.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Your package #492 is out for delivery today. Would you like to add delivery instructions?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Healthcare */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:heart-pulse" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">HEALTHCARE</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Patient Intake &amp; Follow-Up</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Staff spend hours on phone calls for scheduling, intake paperwork, and post-visit follow-ups.
              <br /><br />
              <strong>Solution:</strong> An automation handles appointment scheduling, sends intake forms via WhatsApp/SMS, and triggers post-visit follow-up reminders.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Appointment confirmed for Dr. Patel, Thursday 10am. Intake form sent via WhatsApp.&quot;
            </div>
          </div>
        </GlassCard>

        {/* Agencies */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:kanban" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">AGENCIES</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Automated Client Reporting</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Project status scattered across tools, missed deadlines, manual client updates.
              <br /><br />
              <strong>Solution:</strong> A workflow tracks tasks, auto-sends status reports to clients via email/WhatsApp when milestones hit, and flags blockers before they escalate.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Sprint 3 complete. Report sent to client. Staging deployment queued.&quot;
            </div>
          </div>
        </GlassCard>

        {/* Marketing */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:share-2" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">MARKETING / CREATORS</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Social Media at Scale</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Managing multiple platforms, inconsistent posting, hours wasted on manual scheduling.
              <br /><br />
              <strong>Solution:</strong> An automation schedules across all platforms from one pipeline, distributes content variations, and queues engagement responses.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Posted to 5 platforms. Engagement up 23%. 12 comments queued for reply.&quot;
            </div>
          </div>
        </GlassCard>

        {/* Logistics */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:truck" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">LOGISTICS</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Delivery Tracking &amp; Dispatch</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Customers flood support with &quot;where&apos;s my package?&quot; and drivers need real-time routing updates.
              <br /><br />
              <strong>Solution:</strong> An automation sends real-time tracking notifications, handles delivery rescheduling, and coordinates dispatch updates automatically.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Fleet 7 rerouted due to traffic. ETA updated. Customers notified.&quot;
            </div>
          </div>
        </GlassCard>

        {/* Fitness / Wellness */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:dumbbell" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">FITNESS / WELLNESS</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Appointment &amp; Membership Automation</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> No-shows, expired memberships, and manual class booking eat up front-desk time.
              <br /><br />
              <strong>Solution:</strong> An automation sends booking confirmations, class reminders, and renewal nudges via WhatsApp/SMS. Members can reschedule or cancel without calling.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Hi Sarah, your yoga class starts in 2 hours. Your membership renews next week — want to confirm?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Hospitality */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:utensils" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">HOSPITALITY</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Reservations &amp; Guest Communication</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> No-shows, double bookings, and repetitive guest questions tie up staff.
              <br /><br />
              <strong>Solution:</strong> An automation handles reservation bookings, sends confirmation and reminder messages, manages waitlists, and answers common questions about hours, parking, and menus.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Bot:</span> &quot;Table for 4 confirmed tonight at 7pm. Free parking behind the building. See you soon!&quot;
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
