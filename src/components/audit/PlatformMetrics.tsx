
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, Users, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';

const platformMetrics = [
  {
    platform: 'Instagram',
    followers: 125000,
    posts: 45,
    avgLikes: 5200,
    avgComments: 340,
    avgShares: 120,
    engagementRate: 4.2,
    reach: 890000,
    impressions: 1200000,
    growth: 15.2,
    color: '#E4405F'
  },
  {
    platform: 'TikTok',
    followers: 87000,
    posts: 32,
    avgLikes: 8900,
    avgComments: 650,
    avgShares: 890,
    engagementRate: 8.7,
    reach: 1200000,
    impressions: 2100000,
    growth: 32.5,
    color: '#000000'
  },
  {
    platform: 'Facebook',
    followers: 65000,
    posts: 28,
    avgLikes: 1200,
    avgComments: 85,
    avgShares: 45,
    engagementRate: 2.1,
    reach: 340000,
    impressions: 520000,
    growth: -2.1,
    color: '#1877F2'
  },
  {
    platform: 'YouTube',
    followers: 12000,
    posts: 8,
    avgLikes: 890,
    avgComments: 125,
    avgShares: 78,
    engagementRate: 6.8,
    reach: 95000,
    impressions: 180000,
    growth: 8.9,
    color: '#FF0000'
  }
];

const performanceData = [
  { metric: 'Reach', instagram: 85, tiktok: 92, facebook: 45, youtube: 67 },
  { metric: 'Engagement', instagram: 75, tiktok: 95, facebook: 35, youtube: 78 },
  { metric: 'Growth', instagram: 82, tiktok: 88, facebook: 25, youtube: 71 },
  { metric: 'Content Quality', instagram: 90, tiktok: 85, facebook: 60, youtube: 88 },
  { metric: 'Audience Match', instagram: 88, tiktok: 82, facebook: 70, youtube: 85 },
];

const contentTypePerformance = [
  { type: 'Images', instagram: 4200, tiktok: 0, facebook: 1200, youtube: 0 },
  { type: 'Videos', instagram: 8900, tiktok: 12000, facebook: 2100, youtube: 15000 },
  { type: 'Stories', instagram: 3400, tiktok: 0, facebook: 0, youtube: 0 },
  { type: 'Reels/Shorts', instagram: 12000, tiktok: 15000, facebook: 0, youtube: 18000 },
  { type: 'Live', instagram: 5600, tiktok: 8900, facebook: 1800, youtube: 12000 },
];

export const PlatformMetrics = () => {
  return (
    <div className="space-y-6">
      {/* Platform Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {platformMetrics.map((platform, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{platform.platform}</CardTitle>
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: platform.color }}
                ></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Followers</p>
                  <p className="font-semibold">{(platform.followers / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-gray-600">Posts</p>
                  <p className="font-semibold">{platform.posts}</p>
                </div>
                <div>
                  <p className="text-gray-600">Engagement</p>
                  <p className="font-semibold">{platform.engagementRate}%</p>
                </div>
                <div>
                  <p className="text-gray-600">Growth</p>
                  <div className="flex items-center">
                    {platform.growth > 0 ? (
                      <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-600 mr-1" />
                    )}
                    <p className={`font-semibold text-sm ${platform.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.growth > 0 ? '+' : ''}{platform.growth}%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Avg. Likes</span>
                  <span className="text-xs font-medium">{platform.avgLikes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Avg. Comments</span>
                  <span className="text-xs font-medium">{platform.avgComments.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Reach</span>
                  <span className="text-xs font-medium">{(platform.reach / 1000).toFixed(0)}K</span>
                </div>
              </div>

              <Progress value={(platform.engagementRate / 10) * 100} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Platform Performance Comparison</CardTitle>
            <CardDescription>Normalized performance metrics across platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" className="text-xs" />
                <PolarRadiusAxis domain={[0, 100]} tick={false} />
                <Radar name="Instagram" dataKey="instagram" stroke="#E4405F" fill="#E4405F" fillOpacity={0.2} />
                <Radar name="TikTok" dataKey="tiktok" stroke="#000000" fill="#000000" fillOpacity={0.2} />
                <Radar name="Facebook" dataKey="facebook" stroke="#1877F2" fill="#1877F2" fillOpacity={0.2} />
                <Radar name="YouTube" dataKey="youtube" stroke="#FF0000" fill="#FF0000" fillOpacity={0.2} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Content Type Performance</CardTitle>
            <CardDescription>Average engagement by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contentTypePerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="instagram" fill="#E4405F" />
                <Bar dataKey="tiktok" fill="#000000" />
                <Bar dataKey="facebook" fill="#1877F2" />
                <Bar dataKey="youtube" fill="#FF0000" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics Table */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Detailed Platform Analytics</CardTitle>
          <CardDescription>Comprehensive metrics breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Platform</th>
                  <th className="text-left p-2">Followers</th>
                  <th className="text-left p-2">Engagement Rate</th>
                  <th className="text-left p-2">Avg. Likes</th>
                  <th className="text-left p-2">Avg. Comments</th>
                  <th className="text-left p-2">Reach</th>
                  <th className="text-left p-2">Growth</th>
                </tr>
              </thead>
              <tbody>
                {platformMetrics.map((platform, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: platform.color }}
                        ></div>
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                    </td>
                    <td className="p-2">{platform.followers.toLocaleString()}</td>
                    <td className="p-2">
                      <Badge variant={platform.engagementRate > 5 ? 'default' : 'secondary'}>
                        {platform.engagementRate}%
                      </Badge>
                    </td>
                    <td className="p-2">{platform.avgLikes.toLocaleString()}</td>
                    <td className="p-2">{platform.avgComments.toLocaleString()}</td>
                    <td className="p-2">{(platform.reach / 1000).toFixed(0)}K</td>
                    <td className="p-2">
                      <div className="flex items-center">
                        {platform.growth > 0 ? (
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                        )}
                        <span className={platform.growth > 0 ? 'text-green-600' : 'text-red-600'}>
                          {platform.growth > 0 ? '+' : ''}{platform.growth}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
