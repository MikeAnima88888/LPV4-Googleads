
import { Clock, Users, Shield, TrendingUp } from 'lucide-react';
import { memo } from 'react';

// Memoized stat item to prevent unnecessary re-renders
const StatItem = memo(({ icon: Icon, number, label, subtext, index }: {
  icon: any;
  number: string;
  label: string;
  subtext: string;
  index: number;
}) => (
  <div 
    className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-4 sm:p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 min-h-[140px] sm:min-h-[160px] flex flex-col items-center justify-center">
      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600 mx-auto mb-3 sm:mb-4" />
      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-1 leading-tight">
        {number}
      </div>
      <div className="text-base sm:text-lg font-semibold text-slate-700 mb-1 leading-tight">
        {label}
      </div>
      <div className="text-xs sm:text-sm text-slate-500 leading-tight text-center">
        {subtext}
      </div>
    </div>
  </div>
));

const StatisticsSection = memo(() => {
  const stats = [
    {
      icon: TrendingUp,
      number: "15+",
      label: "Years",
      subtext: "Legal Experience"
    },
    {
      icon: Users,
      number: "1,000+",
      label: "Clients",
      subtext: "Represented"
    },
    {
      icon: Shield,
      number: "Licensed",
      label: "Legal",
      subtext: "Professionals"
    },
    {
      icon: Clock,
      number: "24hrs",
      label: "Response",
      subtext: "Time"
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={`${stat.label}-${index}`}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              subtext={stat.subtext}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection;
