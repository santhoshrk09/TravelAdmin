import {
  Search,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Package,
  Building,
  Activity,
  Car,
  MapPin,
  Hotel,
  Send,
  FileText,
  BarChart3,
  Bell
} from 'lucide-react';

export const stats = [
  {
    id: 'total-leads',
    title: 'Total Leads',
    value: '1,234',
    change: '+8% from last month',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'active-bookings',
    title: 'Active Bookings',
    value: '89',
    change: '+4.8% from last month',
    icon: Calendar,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'revenue-month',
    title: 'Revenue (Month)',
    value: '₹5,67,890',
    change: '+12% increase from last month',
    icon: DollarSign,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    value: '12.5%',
    change: '+2.1% from last month',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

export const inventoryItems = [
  { id: 'packages', title: 'Trip Packages', subtitle: '142 active of 156 total', icon: Package },
  { id: 'hotels', title: 'Hotels Listed', subtitle: '83 active of 89 total', icon: Building },
  { id: 'activities', title: 'Activities', subtitle: '221 active of 234 total', icon: Activity },
  { id: 'cabs', title: 'Cab Services', subtitle: '45 active of 51 total', icon: Car }
];

export const recentLeads = [
  { id: 1, name: 'Priya Sharma', location: 'Goa • Family Package', amount: '₹45,000', status: 'New', statusColor: 'bg-orange-100 text-orange-800' },
  { id: 2, name: 'Rahul Kumar', location: 'Kerala • Honeymoon', amount: '₹75,000', status: 'Booked', statusColor: 'bg-green-100 text-green-800' },
  { id: 3, name: 'Amit Patel', location: 'Rajasthan • Cultural Tour', amount: '₹1,20,000', status: 'Confirmed', statusColor: 'bg-blue-100 text-blue-800' },
  { id: 4, name: 'Sneha Gupta', location: 'Himachal • Adventure', amount: '₹85,000', status: 'Negotiating', statusColor: 'bg-gray-100 text-gray-800' }
];

export const quickActions = [
  { id: 'add-trip', title: 'Add Trip', icon: MapPin },
  { id: 'add-hotel', title: 'Add Hotel', icon: Hotel },
  { id: 'new-lead', title: 'New Lead', icon: Users },
  { id: 'create-offer', title: 'Create Offer', icon: FileText },
  { id: 'send-quote', title: 'Send Quote', icon: Send },
  { id: 'view-reports', title: 'View Reports', icon: BarChart3 }
];

export const sidebarItems = [
  { category: 'OVERVIEW', items: [{ name: 'Dashboard', icon: BarChart3, active: true }] },
  { category: 'TRIP MANAGEMENT', items: [
    { name: 'All Trips', icon: MapPin },
    { name: 'Categories', icon: Package },
    { name: 'Destinations', icon: MapPin },
    { name: 'Itineraries', icon: FileText }
  ]},
  { category: 'INVENTORY', items: [
    { name: 'Hotels', icon: Building },
    { name: 'Activities', icon: Activity },
    { name: 'Cab Booking', icon: Car }
  ]},
  { category: 'SALES & MARKETING', items: [
    { name: 'Leads', icon: Users },
    { name: 'Quotations', icon: FileText },
    { name: 'Offers & Coupons', icon: FileText },
    { name: 'Banners', icon: FileText }
  ]},
  { category: 'CONTENT & SEO', items: [
    { name: 'CMS', icon: FileText },
    { name: 'SEO Settings', icon: Search }
  ]},
  { category: 'COMMUNICATION', items: [
    { name: 'Email Marketing', icon: Send },
    { name: 'WhatsApp Marketing', icon: Send }
  ]},
  { category: 'SYSTEM', items: [
    { name: 'Settings', icon: Activity }
  ]}
];