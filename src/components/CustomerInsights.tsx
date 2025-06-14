
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Users, Heart, ShoppingBag, MessageSquare, Instagram, Facebook } from 'lucide-react';

const superFans = [
  { name: 'Emma Thompson', avatar: '/placeholder.svg', score: 95, purchases: 24, social: 'High', tags: ['Trendsetter', 'Influencer', 'Loyal'] },
  { name: 'Sarah Johnson', avatar: '/placeholder.svg', score: 92, purchases: 18, social: 'High', tags: ['Advocate', 'Regular', 'Style-conscious'] },
  { name: 'Lisa Chen', avatar: '/placeholder.svg', score: 89, purchases: 21, social: 'Medium', tags: ['Collector', 'Premium', 'Brand-loyal'] },
  { name: 'Maria Rodriguez', avatar: '/placeholder.svg', score: 87, purchases: 16, social: 'High', tags: ['Trendsetter', 'Social', 'Frequent'] },
  { name: 'Jessica Wu', avatar: '/placeholder.svg', score: 85, purchases: 19, social: 'Medium', tags: ['Quality-focused', 'Loyal', 'Selective'] },
];

const behaviorData = [
  { category: 'Purchase Frequency', score: 85 },
  { category: 'Social Engagement', score: 78 },
  { category: 'Brand Loyalty', score: 92 },
  { category: 'Price Sensitivity', score: 34 },
  { category: 'Trend Adoption', score: 88 },
  { category: 'Social Influence', score: 71 },
];

const demographicData = [
  { age: '18-24', customers: 2800, engagement: 82 },
  { age: '25-34', customers: 4200, engagement: 75 },
  { age: '35-44', customers: 3100, engagement: 68 },
  { age: '45-54', customers: 1900, engagement: 71 },
  { age: '55+', customers: 550, engagement: 64 },
];

export const CustomerInsights = () => {
  return (
    <div className="space-y-6">
      {/* Super Fans Section */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center text-purple-900">
            <Heart className="w-6 h-6 mr-2 text-purple-600" />
            Super Fans - Top 15% Most Engaged Customers
          </CardTitle>
          <CardDescription>Your most valuable customers with highest engagement scores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {superFans.map((fan, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={fan.avatar} />
                    <AvatarFallback>{fan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{fan.name}</h4>
                    <p className="text-sm text-gray-600">{fan.purchases} purchases • {fan.social} social activity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex gap-1">
                    {fan.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">{fan.score}</div>
                    <div className="text-xs text-gray-500">Engagement Score</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Customer Behavior Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Customer Behavior Profile</CardTitle>
            <CardDescription>Average behavioral patterns across customer base</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={behaviorData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" className="text-xs" />
                <PolarRadiusAxis domain={[0, 100]} tick={false} />
                <Radar
                  name="Score"
                  dataKey="score"
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

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Demographics & Engagement</CardTitle>
            <CardDescription>Customer distribution by age groups</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={demographicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="customers" fill="#3B82F6" />
                <Bar yAxisId="right" dataKey="engagement" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Customer Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Lifestyle Profiles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Luxury Seekers</span>
              <div className="flex items-center space-x-2">
                <Progress value={68} className="w-20 h-2" />
                <span className="text-sm font-medium">68%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Eco-Conscious</span>
              <div className="flex items-center space-x-2">
                <Progress value={45} className="w-20 h-2" />
                <span className="text-sm font-medium">45%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Trendsetters</span>
              <div className="flex items-center space-x-2">
                <Progress value={52} className="w-20 h-2" />
                <span className="text-sm font-medium">52%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Budget-Conscious</span>
              <div className="flex items-center space-x-2">
                <Progress value={34} className="w-20 h-2" />
                <span className="text-sm font-medium">34%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Shopping Personalities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Impulse Buyers</span>
              <div className="flex items-center space-x-2">
                <Progress value={41} className="w-20 h-2" />
                <span className="text-sm font-medium">41%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Research-Driven</span>
              <div className="flex items-center space-x-2">
                <Progress value={72} className="w-20 h-2" />
                <span className="text-sm font-medium">72%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Social Shoppers</span>
              <div className="flex items-center space-x-2">
                <Progress value={56} className="w-20 h-2" />
                <span className="text-sm font-medium">56%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Loyalty Focused</span>
              <div className="flex items-center space-x-2">
                <Progress value={63} className="w-20 h-2" />
                <span className="text-sm font-medium">63%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Communication Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="text-sm">Instagram</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={84} className="w-20 h-2" />
                <span className="text-sm font-medium">84%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={67} className="w-20 h-2" />
                <span className="text-sm font-medium">67%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-green-600" />
                <span className="text-sm">Email</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={78} className="w-20 h-2" />
                <span className="text-sm font-medium">78%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm">TikTok</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={92} className="w-20 h-2" />
                <span className="text-sm font-medium">92%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
