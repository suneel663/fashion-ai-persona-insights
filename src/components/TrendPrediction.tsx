
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, Target, Sparkles } from 'lucide-react';

const trendData = [
  { month: 'Jan', sustainable: 45, minimalist: 32, vintage: 28, streetwear: 65 },
  { month: 'Feb', sustainable: 52, minimalist: 38, vintage: 31, streetwear: 68 },
  { month: 'Mar', sustainable: 61, minimalist: 42, vintage: 35, streetwear: 72 },
  { month: 'Apr', sustainable: 68, minimalist: 48, vintage: 42, streetwear: 75 },
  { month: 'May', sustainable: 75, minimalist: 55, vintage: 38, streetwear: 78 },
  { month: 'Jun', sustainable: 82, minimalist: 61, vintage: 45, streetwear: 82 },
];

const emergingTrends = [
  {
    trend: 'Sustainable Fashion',
    confidence: 92,
    growth: 'Rising',
    impact: 'High',
    timeframe: '2-3 months',
    description: 'Eco-friendly materials and ethical production gaining massive traction',
    keywords: ['organic cotton', 'recycled polyester', 'ethical manufacturing']
  },
  {
    trend: 'Tech-Wear Integration',
    confidence: 78,
    growth: 'Emerging',
    impact: 'Medium',
    timeframe: '4-6 months',
    description: 'Smart fabrics and wearable technology becoming mainstream',
    keywords: ['smart textiles', 'wearable tech', 'functional fashion']
  },
  {
    trend: 'Gender-Neutral Designs',
    confidence: 85,
    growth: 'Rising',
    impact: 'High',
    timeframe: '1-2 months',
    description: 'Unisex clothing and inclusive sizing dominating social conversations',
    keywords: ['unisex', 'inclusive sizing', 'gender-neutral']
  },
  {
    trend: 'Vintage Revival',
    confidence: 71,
    growth: 'Stable',
    impact: 'Medium',
    timeframe: '3-4 months',
    description: '90s and Y2K aesthetics making a strong comeback',
    keywords: ['90s fashion', 'Y2K', 'retro styles']
  }
];

const socialMediaMentions = [
  { platform: 'Instagram', mentions: 15420, growth: 23 },
  { platform: 'TikTok', mentions: 28900, growth: 45 },
  { platform: 'Twitter', mentions: 8340, growth: 12 },
  { platform: 'Pinterest', mentions: 12100, growth: 31 },
];

export const TrendPrediction = () => {
  return (
    <div className="space-y-6">
      {/* Trend Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Rising Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7</div>
            <p className="text-green-100 text-sm mt-1">Currently trending up</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Prediction Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
            <p className="text-blue-100 text-sm mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              New Discoveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-purple-100 text-sm mt-1">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-orange-100 text-sm mt-1">Declining trends</p>
          </CardContent>
        </Card>
      </div>

      {/* Trend Analysis Chart */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Trend Evolution Analysis</CardTitle>
          <CardDescription>6-month trend progression across key fashion categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="sustainable" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="minimalist" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="vintage" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
              <Area type="monotone" dataKey="streetwear" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Emerging Trends */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>AI-Detected Emerging Trends</CardTitle>
          <CardDescription>Predictive analysis of upcoming fashion movements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {emergingTrends.map((trend, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-900">{trend.trend}</h4>
                    <p className="text-gray-600 text-sm mt-1">{trend.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge variant={trend.growth === 'Rising' ? 'default' : trend.growth === 'Emerging' ? 'secondary' : 'outline'}>
                      {trend.growth === 'Rising' && <TrendingUp className="w-3 h-3 mr-1" />}
                      {trend.growth}
                    </Badge>
                    <Badge variant="outline">{trend.impact} Impact</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Confidence Level</div>
                    <div className="flex items-center space-x-2">
                      <Progress value={trend.confidence} className="flex-1" />
                      <span className="font-semibold text-sm">{trend.confidence}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Expected Timeframe</div>
                    <div className="font-medium">{trend.timeframe}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Key Keywords</div>
                    <div className="flex flex-wrap gap-1">
                      {trend.keywords.map((keyword, kIndex) => (
                        <Badge key={kIndex} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media Trend Tracking */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Social Media Trend Tracking</CardTitle>
          <CardDescription>Platform-specific mention analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={socialMediaMentions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="mentions" fill="#3B82F6" />
              <Bar yAxisId="right" dataKey="growth" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
