import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Image, Video, Music, Hash, Clock, TrendingUp, Eye, Heart, MessageCircle } from 'lucide-react';

const topPerformingContent = [
  {
    id: 1,
    platform: 'Instagram',
    type: 'Reel',
    thumbnail: '/placeholder.svg',
    title: 'Summer Fashion Trends 2024',
    likes: 12500,
    comments: 890,
    shares: 340,
    engagement: 8.9,
    date: '2024-06-10',
    hashtags: ['#summerfashion', '#trends2024', '#ootd']
  },
  {
    id: 2,
    platform: 'TikTok',
    type: 'Video',
    thumbnail: '/placeholder.svg',
    title: 'Style Challenge - 3 Outfits',
    likes: 23400,
    comments: 1200,
    shares: 890,
    engagement: 12.4,
    date: '2024-06-08',
    hashtags: ['#stylechallenge', '#fashion', '#outfit']
  },
  {
    id: 3,
    platform: 'YouTube',
    type: 'Long-form',
    thumbnail: '/placeholder.svg',
    title: 'Fashion Week Haul & Try-On',
    likes: 3400,
    comments: 560,
    shares: 120,
    engagement: 6.7,
    date: '2024-06-05',
    hashtags: ['#fashionweek', '#haul', '#tryonhaul']
  }
];

const contentTypeData = [
  { name: 'Images', value: 35, color: '#3B82F6' },
  { name: 'Videos', value: 45, color: '#8B5CF6' },
  { name: 'Stories', value: 15, color: '#10B981' },
  { name: 'Live', value: 5, color: '#F59E0B' },
];

const hashtagPerformance = [
  { hashtag: '#fashion', usage: 45, engagement: 8.2, reach: 120000 },
  { hashtag: '#ootd', usage: 38, engagement: 7.9, reach: 95000 },
  { hashtag: '#style', usage: 42, engagement: 6.8, reach: 110000 },
  { hashtag: '#trendy', usage: 28, engagement: 9.1, reach: 78000 },
  { hashtag: '#outfit', usage: 35, engagement: 7.5, reach: 88000 },
];

const postingTimeData = [
  { hour: '6AM', engagement: 2.1 },
  { hour: '9AM', engagement: 4.5 },
  { hour: '12PM', engagement: 6.8 },
  { hour: '3PM', engagement: 5.2 },
  { hour: '6PM', engagement: 8.9 },
  { hour: '9PM', engagement: 7.3 },
  { hour: '12AM', engagement: 3.4 },
];

export const ContentAnalysis = () => {
  return (
    <div className="space-y-6">
      {/* Content Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Posts</p>
                <p className="text-2xl font-bold">234</p>
              </div>
              <Image className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Avg. Engagement</p>
                <p className="text-2xl font-bold">6.8%</p>
              </div>
              <Heart className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Best Performing</p>
                <p className="text-2xl font-bold">Reels</p>
              </div>
              <Video className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Optimal Time</p>
                <p className="text-2xl font-bold">6PM</p>
              </div>
              <Clock className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Content */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>Your best content across all platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformingContent.map((content) => (
              <div key={content.id} className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={content.thumbnail} />
                  <AvatarFallback>{content.type[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold">{content.title}</h4>
                    <Badge variant="outline">{content.platform}</Badge>
                    <Badge variant="secondary">{content.type}</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-red-500" />
                      {content.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                      {content.comments.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                      {content.engagement}%
                    </div>
                    <span>{content.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {content.hashtags.map((hashtag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {hashtag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Distribution & Timing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Content Type Distribution</CardTitle>
            <CardDescription>Breakdown of your content formats</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contentTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {contentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4">
              {contentTypeData.map((type, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: type.color }}></div>
                  {type.name}: {type.value}%
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Optimal Posting Times</CardTitle>
            <CardDescription>Engagement rates by posting time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={postingTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engagement" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Hashtag Performance */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Hashtag Performance Analysis</CardTitle>
          <CardDescription>Your most effective hashtags across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hashtagPerformance.map((hashtag, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">{hashtag.hashtag}</h4>
                    <p className="text-sm text-gray-600">Used {hashtag.usage} times</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Engagement</p>
                    <p className="font-semibold text-green-600">{hashtag.engagement}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Reach</p>
                    <p className="font-semibold">{(hashtag.reach / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="w-24">
                    <Progress value={(hashtag.engagement / 10) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
