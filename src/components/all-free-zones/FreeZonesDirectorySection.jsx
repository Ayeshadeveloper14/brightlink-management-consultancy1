import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Building2, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  Scale, 
  Warehouse, 
  Briefcase, 
  X, 
  ChevronRight, 
  SlidersHorizontal,
  PhoneCall,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { 
  FREE_ZONES_DATA, 
  UAE_EMIRATES, 
  ACTIVITY_CATEGORIES, 
  FACILITY_OPTIONS 
} from '../../data/freeZonesDirectoryData.js';

export const FreeZonesDirectorySection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmirate, setSelectedEmirate] = useState('All Emirates');
  const [selectedActivity, setSelectedActivity] = useState('All Activities');
  const [selectedFacility, setSelectedFacility] = useState('All Facilities');

  // Comparison State (Array of max 3 IDs)
  const [compareIds, setCompareIds] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Quick Detail Modal State
  const [activeDetailZone, setActiveDetailZone] = useState(null);

  // Handle Filter Reset
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedEmirate('All Emirates');
    setSelectedActivity('All Activities');
    setSelectedFacility('All Facilities');
  };

  const isFiltered = searchTerm !== '' || selectedEmirate !== 'All Emirates' || selectedActivity !== 'All Activities' || selectedFacility !== 'All Facilities';

  // Toggle Compare Selection
  const toggleCompare = (zoneId) => {
    if (compareIds.includes(zoneId)) {
      setCompareIds(compareIds.filter(id => id !== zoneId));
    } else {
      if (compareIds.length >= 3) {
        alert('You can compare a maximum of 3 free zones at a time.');
        return;
      }
      setCompareIds([...compareIds, zoneId]);
    }
  };

  // Filtered Free Zones
  const filteredZones = useMemo(() => {
    return FREE_ZONES_DATA.filter(zone => {
      // 1. Emirate Filter
      if (selectedEmirate !== 'All Emirates' && !zone.emirate.toLowerCase().includes(selectedEmirate.toLowerCase())) {
        return false;
      }

      // 2. Activity Filter
      if (selectedActivity !== 'All Activities' && !zone.activities.includes(selectedActivity)) {
        return false;
      }

      // 3. Facility Filter
      if (selectedFacility !== 'All Facilities' && !zone.facilities.includes(selectedFacility)) {
        return false;
      }

      // 4. Search Query (name, shortName, overview, industryFocus, activities, highlights)
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = zone.name.toLowerCase().includes(query) || zone.shortName.toLowerCase().includes(query);
        const matchesEmirate = zone.emirate.toLowerCase().includes(query);
        const matchesFocus = zone.industryFocus.toLowerCase().includes(query);
        const matchesOverview = zone.overview.toLowerCase().includes(query);
        const matchesActivities = zone.activities.some(act => act.toLowerCase().includes(query));
        const matchesHighlights = zone.highlights.some(h => h.toLowerCase().includes(query));
        return matchesName || matchesEmirate || matchesFocus || matchesOverview || matchesActivities || matchesHighlights;
      }

      return true;
    });
  }, [searchTerm, selectedEmirate, selectedActivity, selectedFacility]);

  // Group by Emirate for standard view when no specific search is active
  const emirateGroups = useMemo(() => {
    const groups = {};
    UAE_EMIRATES.filter(e => e !== 'All Emirates').forEach(em => {
      groups[em] = filteredZones.filter(z => z.emirate.toLowerCase().includes(em.toLowerCase()));
    });
    return groups;
  }, [filteredZones]);

  // Selected Compare Zones
  const compareZones = useMemo(() => {
    return FREE_ZONES_DATA.filter(z => compareIds.includes(z.id));
  }, [compareIds]);

  return (
    <section id="free-zones-directory-search" className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Search className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>INTERACTIVE DISCOVERY ENGINE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAE Free Zone Search & Filtering Directory
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Filter through verified economic zones across the Emirates by location, permissible business activities, facility types, and specialized industries.
          </p>
        </div>

        {/* Search & Filter Controls Panel */}
        <div className="bg-[#FAF7F0]/60 rounded-3xl border border-[#DECBB5] p-6 sm:p-8 space-y-6 shadow-xs">
          
          {/* Main Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#8C5E28] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by free zone name, emirate, business activity, or industry keyword (e.g. DMCC, Crypto, Logistics, Manufacturing, Dubai South)..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#DECBB5] rounded-2xl text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Emirate Quick Pill Filter */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
              Filter by Emirate:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {UAE_EMIRATES.map((em) => {
                const isSelected = selectedEmirate === em;
                return (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setSelectedEmirate(em)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#B8864B] text-white shadow-xs'
                        : 'bg-white text-[#475569] border border-[#E6D7C3] hover:border-[#DECBB5] hover:text-[#0F172A]'
                    }`}
                  >
                    {em}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Dropdown Filters: Activity & Facility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            
            {/* Activity Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="activity-select" className="text-xs font-bold text-[#64748B] block">
                Business Activity / Industry:
              </label>
              <select
                id="activity-select"
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DECBB5] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#B8864B] shadow-2xs cursor-pointer"
              >
                {ACTIVITY_CATEGORIES.map((act) => (
                  <option key={act} value={act}>{act}</option>
                ))}
              </select>
            </div>

            {/* Facility Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="facility-select" className="text-xs font-bold text-[#64748B] block">
                Required Facility Type:
              </label>
              <select
                id="facility-select"
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DECBB5] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#B8864B] shadow-2xs cursor-pointer"
              >
                {FACILITY_OPTIONS.map((fac) => (
                  <option key={fac} value={fac}>{fac}</option>
                ))}
              </select>
            </div>

            {/* Reset & Status Panel */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-end justify-between lg:justify-end gap-3 pt-2 sm:pt-0">
              <div className="text-xs font-semibold text-[#8C5E28]">
                Showing <span className="font-extrabold text-[#0F172A]">{filteredZones.length}</span> of {FREE_ZONES_DATA.length} zones
              </div>
              {isFiltered && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] hover:text-[#0F172A] hover:bg-[#FAF5EC] text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Empty Search State */}
        {filteredZones.length === 0 && (
          <div className="bg-[#FAF7F0]/40 rounded-3xl border border-[#DECBB5] p-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mx-auto shadow-sm">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] font-heading">
              No matching free zones found
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
              We couldn’t find any free zones matching your active criteria. Try broadening your keyword search or resetting the emirate and activity filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-[#B8864B] text-white text-xs font-bold hover:bg-[#976A36] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Directory Card Grid: If filtering or searching, display flat responsive grid */}
        {filteredZones.length > 0 && isFiltered && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                Filtered Search Results ({filteredZones.length})
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredZones.map(zone => renderFreeZoneCard(zone, compareIds, toggleCompare, setActiveDetailZone, onOpenConsultation))}
            </div>
          </div>
        )}

        {/* Standard View (Organized by Emirate) when NO active filter or search */}
        {filteredZones.length > 0 && !isFiltered && (
          <div className="space-y-16">
            {UAE_EMIRATES.filter(e => e !== 'All Emirates').map(emirateName => {
              const zonesInEmirate = emirateGroups[emirateName] || [];
              if (zonesInEmirate.length === 0) return null;

              return (
                <div key={emirateName} className="space-y-6">
                  {/* Emirate Subheading */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E6D7C3] gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                          {emirateName} Free Zones
                        </h3>
                        <span className="text-xs text-[#64748B]">
                          {zonesInEmirate.length} verified economic {zonesInEmirate.length === 1 ? 'jurisdiction' : 'jurisdictions'}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-[#8C5E28] font-medium">
                      Select for side-by-side comparison below
                    </div>
                  </div>

                  {/* Cards Grid for this Emirate */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {zonesInEmirate.map(zone => renderFreeZoneCard(zone, compareIds, toggleCompare, setActiveDetailZone, onOpenConsultation))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Directory Accuracy Disclaimer */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] text-xs text-[#475569] leading-relaxed flex items-start gap-3.5">
          <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1E293B] block">Official Verification & Directory Guidance Note:</strong>
            This directory is compiled by Brightlink as an authoritative informational guide based on published UAE government sources, emirate portals, and free zone authority records. Free zone regulations, licence names, activity schedules, and operational policies evolve continuously. Intended activities and package terms must be confirmed directly with the relevant licensing authority or through our authorized business setup advisors prior to commitment.
          </div>
        </div>

      </div>

      {/* Floating Compare Bar (Bottom of Screen when 1+ zones selected) */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-4 right-4 z-40 max-w-4xl mx-auto"
          >
            <div className="bg-[#0F172A] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#B8864B] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {compareIds.length}/3
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold font-heading">
                    {compareIds.length} Free {compareIds.length === 1 ? 'Zone' : 'Zones'} Selected
                  </div>
                  <div className="text-[11px] text-neutral-300 flex items-center gap-2 truncate max-w-xs sm:max-w-md">
                    {compareZones.map(z => z.shortName).join(' vs ')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setCompareIds([])}
                  className="px-3 py-2 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setIsCompareModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md cursor-pointer inline-flex items-center gap-2 shrink-0"
                >
                  <Scale className="w-4 h-4" />
                  <span>Compare Side-by-Side</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side-by-Side Comparison Modal */}
      <AnimatePresence>
        {isCompareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-[#DECBB5] shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-[#EFEAE2] flex items-center justify-between bg-[#FAF7F0]">
                <div className="flex items-center gap-2.5">
                  <Scale className="w-5 h-5 text-[#B8864B]" />
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    Side-by-Side Free Zone Comparison ({compareZones.length} Selected)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCompareModalOpen(false)}
                  className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-neutral-200/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Table */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#DECBB5]">
                        <th className="py-3 px-4 font-bold text-[#8C5E28] uppercase tracking-wider bg-[#FAF5EC] w-1/4">Criteria</th>
                        {compareZones.map(zone => (
                          <th key={zone.id} className="py-3 px-4 font-bold text-[#0F172A] bg-white border-l border-[#EFEAE2]">
                            <div className="text-sm font-heading">{zone.name}</div>
                            <div className="text-[11px] font-normal text-[#64748B]">{zone.emirate}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EFEAE2]">
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#1E293B] bg-[#FAF5EC]">Industry Focus</td>
                        {compareZones.map(zone => (
                          <td key={zone.id} className="py-3 px-4 text-[#334155] border-l border-[#EFEAE2] font-medium">{zone.industryFocus}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#1E293B] bg-[#FAF5EC]">Governing Authority</td>
                        {compareZones.map(zone => (
                          <td key={zone.id} className="py-3 px-4 text-[#334155] border-l border-[#EFEAE2]">{zone.authority}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#1E293B] bg-[#FAF5EC]">Licence Categories</td>
                        {compareZones.map(zone => (
                          <td key={zone.id} className="py-3 px-4 text-[#334155] border-l border-[#EFEAE2]">
                            <ul className="list-disc list-inside space-y-1">
                              {zone.licenceTypes.map((lt, i) => <li key={i}>{lt}</li>)}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#1E293B] bg-[#FAF5EC]">Facility Models</td>
                        {compareZones.map(zone => (
                          <td key={zone.id} className="py-3 px-4 text-[#334155] border-l border-[#EFEAE2]">
                            <div className="flex flex-wrap gap-1">
                              {zone.facilities.map((fac, i) => (
                                <span key={i} className="px-2 py-0.5 bg-[#FAF7F0] border border-[#E6D7C3] rounded text-[10px] text-[#475569]">{fac}</span>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#1E293B] bg-[#FAF5EC]">Key Strengths</td>
                        {compareZones.map(zone => (
                          <td key={zone.id} className="py-3 px-4 text-[#334155] border-l border-[#EFEAE2]">
                            <ul className="space-y-1">
                              {zone.highlights.map((h, i) => (
                                <li key={i} className="flex items-center gap-1.5 text-[11px]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#1E293B] bg-[#FAF5EC]">Official Portal</td>
                        {compareZones.map(zone => (
                          <td key={zone.id} className="py-3 px-4 border-l border-[#EFEAE2]">
                            <a
                              href={zone.officialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#B8864B] hover:underline font-semibold inline-flex items-center gap-1"
                            >
                              <span>Official Site</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Consultation Prompt */}
                <div className="p-4 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#475569]">
                    Need a tailored cost breakdown comparing these specific authorities for your planned activities?
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCompareModalOpen(false);
                      if (onOpenConsultation) {
                        onOpenConsultation(`Comparison of ${compareZones.map(z => z.shortName).join(', ')}`);
                      } else {
                        window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20am%20comparing%20${encodeURIComponent(compareZones.map(z => z.name).join(' vs '))}%20and%20would%20like%20guidance.`, '_blank');
                      }
                    }}
                    className="px-5 py-2 rounded-xl bg-[#B8864B] text-white text-xs font-bold hover:bg-[#976A36] transition-all shrink-0 cursor-pointer"
                  >
                    Discuss Comparison
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quick Details Modal */}
      <AnimatePresence>
        {activeDetailZone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-[#DECBB5] shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-[#EFEAE2] flex items-center justify-between bg-[#FAF7F0]">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {activeDetailZone.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C5E28]">
                    {activeDetailZone.emirate} • {activeDetailZone.authority}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveDetailZone(null)}
                  className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-neutral-200/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5 text-xs text-[#475569]">
                <div>
                  <h4 className="font-bold text-sm text-[#1E293B] mb-1">Overview</h4>
                  <p className="leading-relaxed">{activeDetailZone.overview}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E293B] mb-1">Primary Industry Focus</h4>
                  <p className="font-semibold text-[#8C5E28]">{activeDetailZone.industryFocus}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E293B] mb-1.5">Permissible Activities</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDetailZone.activities.map((act, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#FAF7F0] border border-[#DECBB5] text-[11px] text-[#334155]">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E293B] mb-1.5">Approved Facilities</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDetailZone.facilities.map((fac, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-[#E6D7C3] text-[11px] text-[#475569]">
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E293B] mb-1.5">Licence Categories</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {activeDetailZone.licenceTypes.map((lt, i) => (
                      <li key={i}>{lt}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EFEAE2] flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={activeDetailZone.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8864B] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {activeDetailZone.brightlinkPath && (
                    <Link
                      to={activeDetailZone.brightlinkPath}
                      onClick={() => setActiveDetailZone(null)}
                      className="px-4 py-2 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] font-bold hover:bg-[#EFEAE2] transition-colors"
                    >
                      View Dedicated Brightlink Page
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

// Sub-render helper for individual Free Zone Card
function renderFreeZoneCard(zone, compareIds, toggleCompare, setActiveDetailZone, onOpenConsultation) {
  const isCompared = compareIds.includes(zone.id);

  return (
    <div
      key={zone.id}
      className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
        isCompared ? 'border-[#B8864B] ring-2 ring-[#B8864B]/20 bg-[#FAF9F6]' : 'border-[#E6D7C3] hover:border-[#DECBB5]'
      }`}
    >
      <div className="space-y-4">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C5E28] bg-[#FAF5EC] px-2.5 py-0.5 rounded border border-[#DECBB5]">
              {zone.emirate}
            </span>
            <h4 className="text-base font-bold text-[#0F172A] font-heading mt-2 leading-snug">
              {zone.name}
            </h4>
          </div>

          {/* Compare Checkbox Button */}
          <button
            type="button"
            onClick={() => toggleCompare(zone.id)}
            title="Select for comparison"
            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer shrink-0 ${
              isCompared
                ? 'bg-[#B8864B] text-white border-[#B8864B]'
                : 'bg-white text-[#64748B] border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B]'
            }`}
          >
            {isCompared ? '✓ Selected' : '+ Compare'}
          </button>
        </div>

        {/* Short Overview */}
        <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
          {zone.overview}
        </p>

        {/* Key Industry Focus Badge */}
        <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#EFEAE2] space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28]">
            Industry Specialisation:
          </div>
          <div className="text-xs font-semibold text-[#0F172A] truncate">
            {zone.industryFocus}
          </div>
        </div>

        {/* Facilities Preview */}
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-bold text-[#64748B]">Facilities:</div>
          <div className="flex flex-wrap gap-1">
            {zone.facilities.map((fac, fIdx) => (
              <span key={fIdx} className="px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-[10px] text-[#475569]">
                {fac}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Card Actions Footer */}
      <div className="mt-6 pt-4 border-t border-[#F1EAE0] flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => setActiveDetailZone(zone)}
            className="text-[#0F172A] hover:text-[#B8864B] font-bold cursor-pointer inline-flex items-center gap-1 transition-colors"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={zone.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748B] hover:text-[#0F172A] text-[11px] inline-flex items-center gap-1 transition-colors"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          {zone.brightlinkPath ? (
            <Link
              to={zone.brightlinkPath}
              className="flex-1 py-2 px-3 rounded-xl bg-[#FAF5EC] hover:bg-[#EFEAE2] text-[#8C5E28] border border-[#DECBB5] text-xs font-bold text-center transition-colors"
            >
              Explore {zone.emirate.split(' ')[0]} Guide
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation(`Setup Inquiry for ${zone.name}`);
                } else {
                  window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20business%20setup%20in%20${encodeURIComponent(zone.name)}.`, '_blank');
                }
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-[#FAF5EC] hover:bg-[#EFEAE2] text-[#8C5E28] border border-[#DECBB5] text-xs font-bold text-center transition-colors cursor-pointer"
            >
              Consult Brightlink
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation(`Discuss Setup: ${zone.name}`);
              } else {
                window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20am%20interested%20in%20setting%20up%20in%20${encodeURIComponent(zone.name)}.`, '_blank');
              }
            }}
            className="px-3 py-2 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-xs cursor-pointer inline-flex items-center gap-1 shrink-0"
            title="Discuss Your Setup"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Setup</span>
          </button>
        </div>
      </div>
    </div>
  );
}
