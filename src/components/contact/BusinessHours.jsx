import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Globe, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const BusinessHours = () => {
  const shouldReduceMotion = useReducedMotion();

  // Configured Weekly Schedule
  // Business Local Timezone: Asia/Dubai (GST, UTC+4)
  const schedule = [
    { day: 'Monday', short: 'Mon', hours: '9:00 AM – 6:00 PM', isOpen: true, openTime: '09:00', closeTime: '18:00' },
    { day: 'Tuesday', short: 'Tue', hours: '9:00 AM – 6:00 PM', isOpen: true, openTime: '09:00', closeTime: '18:00' },
    { day: 'Wednesday', short: 'Wed', hours: '9:00 AM – 6:00 PM', isOpen: true, openTime: '09:00', closeTime: '18:00' },
    { day: 'Thursday', short: 'Thu', hours: '9:00 AM – 6:00 PM', isOpen: true, openTime: '09:00', closeTime: '18:00' },
    { day: 'Friday', short: 'Fri', hours: '9:00 AM – 6:00 PM', isOpen: true, openTime: '09:00', closeTime: '18:00' },
    { day: 'Saturday', short: 'Sat', hours: '9:00 AM – 6:00 PM', isOpen: true, openTime: '09:00', closeTime: '18:00' },
    { day: 'Sunday', short: 'Sun', hours: 'Closed (Weekend)', isOpen: false }
  ];

  const [liveStatus, setLiveStatus] = useState({
    isOpenNow: false,
    statusBadge: 'Calculating...',
    currentDubaiTime: '',
    currentDayShort: 'Mon'
  });

  useEffect(() => {
    const calculateDubaiStatus = () => {
      try {
        const now = new Date();

        // Format parts using Dubai timezone
        const dtf = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dubai',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        });

        const timeFormatter24 = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dubai',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        });

        const parts24 = timeFormatter24.formatToParts(now);
        const map24 = {};
        parts24.forEach(p => { map24[p.type] = p.value; });

        const weekday = map24.weekday; // 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
        const hour = parseInt(map24.hour, 10);
        const minute = parseInt(map24.minute, 10);
        const currentMinutes = hour * 60 + minute;

        const openMinutes = 9 * 60; // 9:00 AM = 540
        const closeMinutes = 18 * 60; // 6:00 PM = 1080

        let isOpenNow = false;
        let statusBadge = '';

        if (weekday === 'Sun') {
          isOpenNow = false;
          statusBadge = 'Closed Today (Sunday) · Opens Monday at 9:00 AM GST';
        } else if (currentMinutes < openMinutes) {
          isOpenNow = false;
          statusBadge = 'Closed Now · Opens Today at 9:00 AM GST';
        } else if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
          isOpenNow = true;
          statusBadge = 'Open Now · Closes at 6:00 PM GST';
        } else {
          isOpenNow = false;
          if (weekday === 'Sat') {
            statusBadge = 'Closed for the day · Opens Monday at 9:00 AM GST';
          } else {
            statusBadge = 'Closed for the day · Opens Tomorrow at 9:00 AM GST';
          }
        }

        const formattedTime = dtf.format(now);

        setLiveStatus({
          isOpenNow,
          statusBadge,
          currentDubaiTime: formattedTime,
          currentDayShort: weekday
        });
      } catch (err) {
        console.error('Error calculating Dubai local time status:', err);
      }
    };

    calculateDubaiStatus();
    const interval = setInterval(calculateDubaiStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-neutral-100">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C5E28]">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>BUSINESS HOURS & SCHEDULE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
            Office Opening Hours
          </h3>
        </div>

        {/* Live Open / Closed Indicator */}
        <div className="flex flex-col sm:items-end gap-1">
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
              liveStatus.isOpenNow 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}
          >
            <span 
              className={`w-2 h-2 rounded-full ${
                liveStatus.isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`} 
            />
            <span>{liveStatus.isOpenNow ? 'Open Now' : 'Closed Now'}</span>
          </div>
          <span className="text-[11px] text-neutral-500 tabular-nums">
            {liveStatus.statusBadge}
          </span>
        </div>
      </div>

      {/* Dubai Local Time Banner */}
      <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3]/70 flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569]">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#B8864B] shrink-0" />
          <span>Local Office Time (Dubai, UAE · GST / UTC+4):</span>
        </div>
        <div className="font-bold font-mono text-[#0F172A] bg-white px-2.5 py-1 rounded-md border border-[#DECBB5]">
          {liveStatus.currentDubaiTime || 'Asia/Dubai (GST)'}
        </div>
      </div>

      {/* Weekly Schedule Table */}
      <div className="space-y-2">
        <div className="grid grid-cols-12 text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 pb-1">
          <span className="col-span-5">Day of the Week</span>
          <span className="col-span-7 text-right">Working Hours</span>
        </div>

        <div className="divide-y divide-neutral-100 rounded-2xl border border-neutral-100 overflow-hidden bg-neutral-50/40">
          {schedule.map((item) => {
            const isToday = item.short === liveStatus.currentDayShort;
            return (
              <div
                key={item.day}
                className={`grid grid-cols-12 items-center px-4 py-3 text-xs sm:text-sm transition-colors ${
                  isToday 
                    ? 'bg-[#FAF5EC] font-semibold text-[#8C5E28]' 
                    : 'text-[#334155] hover:bg-neutral-50'
                }`}
              >
                <div className="col-span-5 flex items-center gap-2">
                  <span>{item.day}</span>
                  {isToday && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#B8864B] text-white">
                      Today
                    </span>
                  )}
                </div>

                <div className="col-span-7 text-right">
                  {item.isOpen ? (
                    <span className="tabular-nums font-medium text-[#0F172A]">
                      {item.hours}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-neutral-200 text-neutral-600">
                      {item.hours}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekend & After-Hours Note */}
      <div className="p-4 rounded-2xl bg-white border border-[#E6D7C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5 text-[#475569]">
          <MessageSquare className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <p>
            <strong>After-Hours & Sunday Inquiries:</strong> While our physical office is closed on Sundays, our WhatsApp emergency desk remains monitored for urgent visa expiries and status adjustments.
          </p>
        </div>
        <a
          href="https://wa.me/971566556645?text=Hello%20Brightlink%2C%20I%20have%20an%20urgent%20weekend%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shrink-0 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
        >
          <span>WhatsApp 24/7 Desk</span>
        </a>
      </div>
    </motion.div>
  );
};

export default BusinessHours;
