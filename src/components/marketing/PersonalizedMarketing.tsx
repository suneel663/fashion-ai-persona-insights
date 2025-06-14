
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Target, Zap, Heart, Mail, MessageSquare, Gift, Users, TrendingUp, Send, Eye, Click, ShoppingBag, Sparkles } from 'lucide-react';

const campaignData = [
  {
    id: 1,
    name: 'Superfan VIP Access',
    type: 'Exclusive',
    audience: 'Diamond Tier',
    status: 'active',
    sent: 342,
    opened: 298,
    clicked: 187,
    converted: 94,
    revenue: 28400,
    ctr: 62.8,
    conversionRate: 27.5,
    roi: 680,
    personalizedElements: ['Name', 'Purchase History', 'Style Preferences', 'Exclusive Products'],
    channels: ['Email', 'SMS', 'In-App']
  },
  {
    id: 2,
    name: 'Trend Alert - Y2K Revival',
    type: 'Trend-based',
    audience: 'Gen Z Segment',
    status: 'completed',
    sent: 1250,
    opened: 875,
    clicked: 402,
    converted: 156,
    revenue: 18720,
    ctr: 45.9,
    conversionRate: 12.5,
    roi: 420,
    personalizedElements: ['Age Group', 'Platform Activity', 'Trend Affinity', 'Price Range'],
    channels: ['Push Notification', 'Social Media', 'Email']
  },
  {
    id: 3,
    name: 'Sustainable Fashion Focus',
    type: 'Value-based',
    audience: 'Eco-conscious',
    status: 'draft',
    sent: 0,
    opened: 0,
    clicked: 0,
    converted: 0,
    revenue: 0,
    ctr: 0,
    conversionRate: 0,
    roi: 0,
    personalizedElements: ['Values', 'Brand Mentions', 'Sustainability Score', 'Content Engagement'],
    channels: ['Email', 'Social Media']
  }
];

const personalizationMetrics = [
  { metric: 'Open Rate', personalized: 68, generic: 24, improvement: 183 },
  { metric: 'Click Rate', personalized: 42, generic: 8, improvement: 425 },
  { metric: 'Conversion', personalized: 18, generic: 3, improvement: 500 },
  { metric: 'Revenue per Email', personalized: 12.40, generic: 2.80, improvement: 343 },
  { metric: 'Unsubscribe Rate', personalized: 0.8, generic: 3.2, improvement: -75 }
];

const audienceSegments = [
  { name: 'Superfans', size: 342, engagement: 94, ltv: 3240, color: '#8B5CF6' },
  { name: 'Trend Followers', size: 1250, engagement: 67, ltv: 850, color: '#3B82F6' },
  { name: 'Eco-conscious', size: 890, engagement: 73, ltv: 1120, color: '#10B981' },
  { name: 'Budget Shoppers', size: 2100, engagement: 32, ltv: 340, color: '#F59E0B' },
  { name: 'Luxury Seekers', size: 456, engagement: 82, ltv: 2800, color: '#EF4444' }
];

const campaignPerformance = [
  { month: 'Jan', personalized: 45, generic: 18 },
  { month: 'Feb', personalized: 52, generic: 16 },
  { month: 'Mar', personalized: 48, generic: 22 },
  { month: 'Apr', personalized: 61, generic: 19 },
  { month: 'May', personalized: 68, generic: 24 },
  { month: 'Jun', personalized: 74, generic: 21 }
];

export const PersonalizedMarketing = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [campaignMessage, setCampaignMessage] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'draft': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const calculateROI = (revenue: number, sent: number) => {
    const cost = sent * 0.05; // Assume $0.05 per email
    return revenue > 0 ? Math.round(((revenue - cost) / cost) * 100) : 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Personalized Marketing</h2>
          <p className="text-gray-600">AI-powered hyper-personalized campaigns for maximum engagement</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Target className="w-4 h-4 mr-2" />
            Create Segment
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Active Campaigns</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-purple-200">+3 this month</p>
              </div>
              <Target className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Avg. Open Rate</p>
                <p className="text-2xl font-bold">68%</p>
                <p className="text-xs text-blue-200">+183% vs generic</p>
              </div>
              <Eye className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Conversion Rate</p>
                <p className="text-2xl font-bold">18%</p>
                <p className="text-xs text-green-200">5x industry average</p>
              </div>
              <ShoppingBag className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold">$94K</p>
                <p className="text-xs text-orange-200">This month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="segments">Audience Segments</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="create">Create Campaign</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="space-y-4">
            {campaignData.map((campaign) => (
              <Card key={campaign.id} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">{campaign.name}</h3>
                        <Badge className={getStatusColor(campaign.status)}>
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </div>
                      <p className="text-gray-600">Target: {campaign.audience}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="bg-purple-600 text-white">
                        <Send className="w-4 h-4 mr-1" />
                        Send
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Sent</p>
                      <p className="text-lg font-bold">{campaign.sent.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Opened</p>
                      <p className="text-lg font-bold text-blue-600">{campaign.opened.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Clicked</p>
                      <p className="text-lg font-bold text-green-600">{campaign.clicked.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Converted</p>
                      <p className="text-lg font-bold text-purple-600">{campaign.converted.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-lg font-bold text-green-600">${campaign.revenue.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">ROI</p>
                      <p className="text-lg font-bold text-orange-600">{campaign.roi}%</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Personalization Elements</p>
                      <div className="flex flex-wrap gap-1">
                        {campaign.personalizedElements.map((element, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {element}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Channels</p>
                      <div className="flex flex-wrap gap-1">
                        {campaign.channels.map((channel, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Click Rate</p>
                      <Progress value={campaign.ctr} className="h-2 mt-1" />
                      <p className="text-xs text-gray-500 mt-1">{campaign.ctr}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Conversion Rate</p>
                      <Progress value={campaign.conversionRate} className="h-2 mt-1" />
                      <p className="text-xs text-gray-500 mt-1">{campaign.conversionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">ROI</p>
                      <Progress value={Math.min(campaign.roi / 10, 100)} className="h-2 mt-1" />
                      <p className="text-xs text-gray-500 mt-1">{campaign.roi}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audienceSegments.map((segment, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: segment.color }}></div>
                      <h3 className="font-semibold">{segment.name}</h3>
                    </div>
                    <Badge variant="outline">{segment.size} users</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Engagement</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={segment.engagement} className="w-16 h-2" />
                        <span className="text-sm font-medium">{segment.engagement}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. LTV</span>
                      <span className="font-semibold">${segment.ltv}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full mt-3" variant="outline">
                    <Target className="w-4 h-4 mr-1" />
                    Create Campaign
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Personalized vs Generic Performance</CardTitle>
                <CardDescription>Comparison of personalized and generic campaign metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={personalizationMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="personalized" fill="#8B5CF6" name="Personalized" />
                    <Bar dataKey="generic" fill="#E5E7EB" name="Generic" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Campaign Performance Trends</CardTitle>
                <CardDescription>Monthly performance comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={campaignPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="personalized" stroke="#8B5CF6" strokeWidth={2} name="Personalized" />
                    <Line type="monotone" dataKey="generic" stroke="#9CA3AF" strokeWidth={2} name="Generic" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Personalization Impact</CardTitle>
              <CardDescription>Key metrics showing the impact of personalization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {personalizationMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h4 className="font-semibold">{metric.metric}</h4>
                        <p className="text-sm text-gray-600">
                          Personalized: {metric.personalized}% vs Generic: {metric.generic}%
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${metric.improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.improvement > 0 ? '+' : ''}{metric.improvement}%
                      </div>
                      <p className="text-sm text-gray-600">improvement</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Create Personalized Campaign</CardTitle>
              <CardDescription>AI-powered campaign creation with automatic personalization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Campaign Name</label>
                    <Input 
                      placeholder="Enter campaign name"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Target Audience</label>
                    <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience segment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="superfans">Superfans</SelectItem>
                        <SelectItem value="trend-followers">Trend Followers</SelectItem>
                        <SelectItem value="eco-conscious">Eco-conscious</SelectItem>
                        <SelectItem value="budget-shoppers">Budget Shoppers</SelectItem>
                        <SelectItem value="luxury-seekers">Luxury Seekers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Campaign Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select campaign type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-launch">Product Launch</SelectItem>
                        <SelectItem value="trend-alert">Trend Alert</SelectItem>
                        <SelectItem value="exclusive-offer">Exclusive Offer</SelectItem>
                        <SelectItem value="re-engagement">Re-engagement</SelectItem>
                        <SelectItem value="seasonal">Seasonal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Channels</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email" className="rounded" />
                        <label htmlFor="email" className="text-sm">Email</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="sms" className="rounded" />
                        <label htmlFor="sms" className="text-sm">SMS</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="push" className="rounded" />
                        <label htmlFor="push" className="text-sm">Push Notification</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="social" className="rounded" />
                        <label htmlFor="social" className="text-sm">Social Media</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Message Template</label>
                    <Textarea 
                      placeholder="Enter your message template. Use {NAME}, {LAST_PURCHASE}, {STYLE_PREFERENCE} for personalization"
                      rows={6}
                      value={campaignMessage}
                      onChange={(e) => setCampaignMessage(e.target.value)}
                    />
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Available Personalization Tags</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>{'{NAME}'} - First name</div>
                      <div>{'{LAST_PURCHASE}'} - Last purchase</div>
                      <div>{'{STYLE_PREFERENCE}'} - Style preference</div>
                      <div>{'{FAVORITE_BRAND}'} - Favorite brand</div>
                      <div>{'{PRICE_RANGE}'} - Price range</div>
                      <div>{'{LOCATION}'} - Location</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button className="flex-1 bg-purple-600 text-white">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Create Campaign
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
