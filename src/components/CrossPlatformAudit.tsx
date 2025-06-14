
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, TrendingUp, Users, Eye, Heart, MessageCircle, Share2, Settings, RefreshCw } from 'lucide-react';
import { SocialMediaConnections } from './audit/SocialMediaConnections';
import { PlatformMetrics } from './audit/PlatformMetrics';
import { ContentAnalysis } from './audit/ContentAnalysis';
import { AuditInsights } from './audit/AuditInsights';

const platformData = [
  { platform: 'Instagram', followers: 125000, engagement: 4.2, posts: 45, reach: 890000, color: '#E4405F' },
  { platform: 'TikTok', followers: 87000, engagement: 8.7, posts: 32, reach: 1200000, color: '#000000' },
  { platform: 'Facebook', followers: 65000, engagement: 2.1, posts: 28, reach: 340000, color: '#1877F2' },
  { platform: 'Twitter', followers: 34000, engagement: 3.5, posts: 67, reach: 180000, color: '#1DA1F2' },
  { platform: 'YouTube', followers: 12000, engagement: 6.8, posts: 8, reach: 95000, color: '#FF0000' },
];

const engagementTrends = [
  { date: '2024-01', instagram: 4.1, tiktok: 8.2, facebook: 2.3, twitter: 3.2, youtube: 6.5 },
  { date: '2024-02', instagram: 4.3, tiktok: 8.5, facebook: 2.1, twitter: 3.4, youtube: 6.8 },
  { date: '2024-03', instagram: 4.0, tiktok: 8.1, facebook: 2.2, twitter: 3.1, youtube: 6.3 },
  { date: '2024-04', instagram: 4.5, tiktok: 8.9, facebook: 2.0, twitter: 3.6, youtube: 7.1 },
  { date: '2024-05', instagram: 4.2, tiktok: 8.7, facebook: 2.1, twitter: 3.5, youtube: 6.8 },
];

export const CrossPlatformAudit = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshData = async () => {
    setRefreshing(true);
    // Simulate API calls to refresh data
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header with Refresh */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cross-Platform Audit</h2>
          <p className="text-gray-600">Comprehensive analysis across all your social media channels</p>
        </div>
        <Button onClick={handleRefreshData} disabled={refreshing} className="flex items-center gap-2">
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </div>

      {/* Platform Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {platformData.map((platform, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{platform.platform}</CardTitle>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Followers</span>
                <span className="font-semibold">{(platform.followers / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Engagement</span>
                <span className="font-semibold">{platform.engagement}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Posts</span>
                <span className="font-semibold">{platform.posts}</span>
              </div>
              <Progress value={(platform.engagement / 10) * 100} className="h-1" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Audit Tabs */}
      <Tabs defaultValue="connections" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="connections" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            API Connections
          </TabsTrigger>
          <TabsTrigger value="metrics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Platform Metrics
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Content Analysis
          </TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            AI Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="space-y-6">
          <SocialMediaConnections />
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <PlatformMetrics />
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <ContentAnalysis />
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <AuditInsights />
        </TabsContent>
      </Tabs>

      {/* Engagement Trends Chart */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Cross-Platform Engagement Trends</CardTitle>
          <CardDescription>Monthly engagement rates across all connected platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={engagementTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="instagram" stroke="#E4405F" strokeWidth={2} />
              <Line type="monotone" dataKey="tiktok" stroke="#000000" strokeWidth={2} />
              <Line type="monotone" dataKey="facebook" stroke="#1877F2" strokeWidth={2} />
              <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
              <Line type="monotone" dataKey="youtube" stroke="#FF0000" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
