
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Heart, Star, Crown, TrendingUp, Users, Gift, Target, Zap, Filter, Search } from 'lucide-react';

const superfanData = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    avatar: '/placeholder.svg',
    tier: 'Diamond',
    superfanScore: 98,
    ltv: 4500,
    purchases: 32,
    engagement: 94,
    influence: 87,
    loyalty: 96,
    advocacy: 92,
    tags: ['Trendsetter', 'Influencer', 'Brand Ambassador'],
    socialReach: 125000,
    brandMentions: 45,
    ugcContributions: 28,
    referrals: 12,
    joinDate: '2022-03-15',
    lastActivity: '2 hours ago',
    preferredCategories: ['Dresses', 'Accessories', 'Shoes'],
    personalizedOffers: 8,
    exclusiveAccess: true
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: '/placeholder.svg',
    tier: 'Platinum',
    superfanScore: 94,
    ltv: 3200,
    purchases: 28,
    engagement: 89,
    influence: 82,
    loyalty: 93,
    advocacy: 88,
    tags: ['Style Icon', 'Loyal', 'High Value'],
    socialReach: 85000,
    brandMentions: 32,
    ugcContributions: 21,
    referrals: 8,
    joinDate: '2021-11-20',
    lastActivity: '1 day ago',
    preferredCategories: ['Outerwear', 'Dresses', 'Bags'],
    personalizedOffers: 6,
    exclusiveAccess: true
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    avatar: '/placeholder.svg',
    tier: 'Gold',
    superfanScore: 87,
    ltv: 2800,
    purchases: 24,
    engagement: 81,
    influence: 75,
    loyalty: 89,
    advocacy: 83,
    tags: ['Collector', 'Premium', 'Engaged'],
    socialReach: 42000,
    brandMentions: 18,
    ugcContributions: 15,
    referrals: 5,
    joinDate: '2022-07-08',
    lastActivity: '3 hours ago',
    preferredCategories: ['Jewelry', 'Handbags', 'Scarves'],
    personalizedOffers: 4,
    exclusiveAccess: false
  }
];

const superfanMetrics = [
  { name: 'Purchase Frequency', value: 92, color: '#3B82F6' },
  { name: 'Social Engagement', value: 88, color: '#8B5CF6' },
  { name: 'Brand Advocacy', value: 85, color: '#10B981' },
  { name: 'Content Creation', value: 79, color: '#F59E0B' },
  { name: 'Referral Activity', value: 73, color: '#EF4444' },
  { name: 'Exclusive Access', value: 95, color: '#6366F1' }
];

const tierDistribution = [
  { tier: 'Diamond', count: 12, percentage: 2.4, color: '#A855F7' },
  { tier: 'Platinum', count: 28, percentage: 5.6, color: '#3B82F6' },
  { tier: 'Gold', count: 85, percentage: 17, color: '#F59E0B' },
  { tier: 'Silver', count: 165, percentage: 33, color: '#6B7280' },
  { tier: 'Bronze', count: 210, percentage: 42, color: '#CD7C2F' }
];

export const SuperfanIdentification = () => {
  const [selectedTier, setSelectedTier] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('superfanScore');

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'Diamond': return <Crown className="w-4 h-4 text-purple-600" />;
      case 'Platinum': return <Star className="w-4 h-4 text-blue-600" />;
      case 'Gold': return <Star className="w-4 h-4 text-yellow-600" />;
      default: return <Heart className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Diamond': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Platinum': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Superfan Identification</h2>
          <p className="text-gray-600">AI-powered identification and analysis of your most valuable customers</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <Target className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Superfans</p>
                <p className="text-2xl font-bold">342</p>
                <p className="text-xs text-purple-200">Top 15% of customers</p>
              </div>
              <Crown className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Avg. LTV</p>
                <p className="text-2xl font-bold">$3,240</p>
                <p className="text-xs text-blue-200">+18% vs regular customers</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Engagement Rate</p>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs text-green-200">3x higher than average</p>
              </div>
              <Zap className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Referral Rate</p>
                <p className="text-2xl font-bold">32%</p>
                <p className="text-xs text-orange-200">High advocacy score</p>
              </div>
              <Users className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="identification" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="identification">Superfan List</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="tiers">Tier Management</TabsTrigger>
        </TabsList>

        <TabsContent value="identification" className="space-y-6">
          {/* Filters */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input 
                      placeholder="Search superfans..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={selectedTier} onValueChange={setSelectedTier}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by tier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tiers</SelectItem>
                    <SelectItem value="Diamond">Diamond</SelectItem>
                    <SelectItem value="Platinum">Platinum</SelectItem>
                    <SelectItem value="Gold">Gold</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="superfanScore">Superfan Score</SelectItem>
                    <SelectItem value="ltv">Lifetime Value</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="influence">Influence</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Superfan List */}
          <div className="space-y-4">
            {superfanData.map((superfan) => (
              <Card key={superfan.id} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={superfan.avatar} />
                        <AvatarFallback>{superfan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{superfan.name}</h3>
                          <Badge className={getTierColor(superfan.tier)}>
                            {getTierIcon(superfan.tier)}
                            <span className="ml-1">{superfan.tier}</span>
                          </Badge>
                          {superfan.exclusiveAccess && (
                            <Badge variant="outline" className="text-purple-600 border-purple-200">
                              <Crown className="w-3 h-3 mr-1" />
                              VIP Access
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-gray-600">Superfan Score</p>
                            <p className="font-bold text-purple-600">{superfan.superfanScore}/100</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Lifetime Value</p>
                            <p className="font-bold">${superfan.ltv.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Purchases</p>
                            <p className="font-bold">{superfan.purchases}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Social Reach</p>
                            <p className="font-bold">{(superfan.socialReach / 1000).toFixed(0)}K</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {superfan.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2 mb-3">
                          <div>
                            <p className="text-xs text-gray-600">Engagement</p>
                            <Progress value={superfan.engagement} className="h-2" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Influence</p>
                            <Progress value={superfan.influence} className="h-2" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Loyalty</p>
                            <Progress value={superfan.loyalty} className="h-2" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Advocacy</p>
                            <Progress value={superfan.advocacy} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                      <Button size="sm" className="bg-purple-600 text-white">
                        <Gift className="w-4 h-4 mr-1" />
                        Send Offer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Superfan Metrics Overview</CardTitle>
                <CardDescription>Key performance indicators for superfan behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={superfanMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Superfan Behavior Profile</CardTitle>
                <CardDescription>Average behavioral patterns of superfans</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={superfanMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" className="text-xs" />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} />
                    <Radar
                      name="Score"
                      dataKey="value"
                      stroke="#8B5CF6"
                      fill="#8B5CF6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tiers" className="space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Tier Distribution</CardTitle>
              <CardDescription>Distribution of superfans across different tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tierDistribution.map((tier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getTierIcon(tier.tier)}
                      <div>
                        <h4 className="font-semibold">{tier.tier}</h4>
                        <p className="text-sm text-gray-600">{tier.count} superfans</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">{tier.percentage}%</p>
                        <p className="text-sm text-gray-600">of total</p>
                      </div>
                      <div className="w-24">
                        <Progress value={tier.percentage} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
