
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Sparkles, Brain, Target, Calendar, Globe, Zap, AlertCircle, CheckCircle } from 'lucide-react';

const trendPredictions = [
  {
    id: 1,
    trend: 'Sustainable Fashion',
    category: 'Materials',
    confidence: 94,
    timeline: '2-3 months',
    impact: 'High',
    growth: '+85%',
    keywords: ['eco-friendly', 'sustainable', 'organic cotton', 'recycled materials'],
    platforms: ['Instagram', 'TikTok', 'Pinterest'],
    demographics: ['Gen Z', 'Millennials'],
    currentMentions: 125000,
    predictedMentions: 231000,
    status: 'rising',
    actionable: true
  },
  {
    id: 2,
    trend: 'Y2K Revival',
    category: 'Style',
    confidence: 89,
    timeline: '1-2 months',
    impact: 'Medium',
    growth: '+67%',
    keywords: ['y2k', 'retro', '2000s fashion', 'metallic', 'chunky sneakers'],
    platforms: ['TikTok', 'Instagram'],
    demographics: ['Gen Z'],
    currentMentions: 89000,
    predictedMentions: 148000,
    status: 'peak',
    actionable: true
  },
  {
    id: 3,
    trend: 'Maximalist Jewelry',
    category: 'Accessories',
    confidence: 82,
    timeline: '3-4 months',
    impact: 'Medium',
    growth: '+45%',
    keywords: ['statement jewelry', 'layered necklaces', 'chunky rings', 'bold earrings'],
    platforms: ['Pinterest', 'Instagram'],
    demographics: ['Millennials', 'Gen X'],
    currentMentions: 67000,
    predictedMentions: 97000,
    status: 'emerging',
    actionable: false
  }
];

const trendCategories = [
  { name: 'Colors', trends: 12, growth: '+23%', color: '#FF6B6B' },
  { name: 'Materials', trends: 8, growth: '+45%', color: '#4ECDC4' },
  { name: 'Styles', trends: 15, growth: '+18%', color: '#45B7D1' },
  { name: 'Accessories', trends: 6, growth: '+67%', color: '#96CEB4' },
  { name: 'Patterns', trends: 9, growth: '+34%', color: '#FECA57' },
  { name: 'Occasions', trends: 11, growth: '+29%', color: '#FF9FF3' }
];

const trendTimeline = [
  { month: 'Jan', sustainable: 45, y2k: 23, maximalist: 12, minimalist: 67 },
  { month: 'Feb', sustainable: 52, y2k: 34, maximalist: 18, minimalist: 61 },
  { month: 'Mar', sustainable: 61, y2k: 45, maximalist: 25, minimalist: 58 },
  { month: 'Apr', sustainable: 73, y2k: 67, maximalist: 34, minimalist: 52 },
  { month: 'May', sustainable: 85, y2k: 89, maximalist: 42, minimalist: 45 },
  { month: 'Jun', sustainable: 94, y2k: 95, maximalist: 51, minimalist: 38 }
];

const aiInsights = [
  {
    type: 'opportunity',
    title: 'Sustainable Fashion Surge',
    description: 'High consumer demand for eco-friendly materials detected across Gen Z demographics',
    confidence: 96,
    urgency: 'high',
    recommendation: 'Launch sustainable collection within 30 days'
  },
  {
    type: 'warning',
    title: 'Fast Fashion Decline',
    description: 'Negative sentiment towards fast fashion increasing by 45% monthly',
    confidence: 87,
    urgency: 'medium',
    recommendation: 'Pivot marketing messaging to emphasize quality and sustainability'
  },
  {
    type: 'insight',
    title: 'Color Trend Shift',
    description: 'Earth tones gaining momentum while neon colors losing popularity',
    confidence: 78,
    urgency: 'low',
    recommendation: 'Adjust upcoming color palette for Fall collection'
  }
];

export const AITrendPrediction = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('3months');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'rising': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'peak': return <Sparkles className="w-4 h-4 text-yellow-600" />;
      case 'emerging': return <Zap className="w-4 h-4 text-blue-600" />;
      default: return <TrendingDown className="w-4 h-4 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'rising': return 'bg-green-100 text-green-800 border-green-200';
      case 'peak': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'emerging': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Trend Prediction</h2>
          <p className="text-gray-600">Real-time fashion trend analysis and forecasting powered by AI</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Brain className="w-4 h-4 mr-2" />
            Train Model
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <Target className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aiInsights.map((insight, index) => (
          <Card key={index} className={`${
            insight.type === 'opportunity' ? 'border-green-200 bg-green-50' :
            insight.type === 'warning' ? 'border-red-200 bg-red-50' :
            'border-blue-200 bg-blue-50'
          }`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {insight.type === 'opportunity' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                   insight.type === 'warning' ? <AlertCircle className="w-5 h-5 text-red-600" /> :
                   <Brain className="w-5 h-5 text-blue-600" />}
                  <Badge variant="outline" className={`text-xs ${
                    insight.urgency === 'high' ? 'border-red-200 text-red-700' :
                    insight.urgency === 'medium' ? 'border-yellow-200 text-yellow-700' :
                    'border-blue-200 text-blue-700'
                  }`}>
                    {insight.urgency} priority
                  </Badge>
                </div>
                <span className={`text-sm font-medium ${getConfidenceColor(insight.confidence)}`}>
                  {insight.confidence}%
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
              <p className="text-xs text-gray-500 italic">{insight.recommendation}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="predictions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="predictions">Trend Predictions</TabsTrigger>
          <TabsTrigger value="timeline">Timeline Analysis</TabsTrigger>
          <TabsTrigger value="categories">Category Trends</TabsTrigger>
          <TabsTrigger value="monitoring">Real-time Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="predictions" className="space-y-6">
          <div className="space-y-4">
            {trendPredictions.map((trend) => (
              <Card key={trend.id} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold">{trend.trend}</h3>
                        <Badge className={getStatusColor(trend.status)}>
                          {getStatusIcon(trend.status)}
                          <span className="ml-1 capitalize">{trend.status}</span>
                        </Badge>
                        <Badge variant="outline">{trend.category}</Badge>
                        {trend.actionable && (
                          <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                            <Target className="w-3 h-3 mr-1" />
                            Actionable
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Confidence</p>
                          <p className={`text-lg font-bold ${getConfidenceColor(trend.confidence)}`}>
                            {trend.confidence}%
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Timeline</p>
                          <p className="text-lg font-bold">{trend.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Impact</p>
                          <p className="text-lg font-bold">{trend.impact}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Growth</p>
                          <p className="text-lg font-bold text-green-600">{trend.growth}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Keywords</p>
                          <div className="flex flex-wrap gap-1">
                            {trend.keywords.map((keyword, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Top Platforms</p>
                          <div className="flex flex-wrap gap-1">
                            {trend.platforms.map((platform, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <div>
                            <p className="text-sm text-gray-600">Current Mentions</p>
                            <p className="font-semibold">{trend.currentMentions.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Predicted Mentions</p>
                            <p className="font-semibold text-green-600">{trend.predictedMentions.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Calendar className="w-4 h-4 mr-1" />
                            Schedule
                          </Button>
                          <Button size="sm" className="bg-blue-600 text-white">
                            <Globe className="w-4 h-4 mr-1" />
                            Analyze
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Trend Timeline Analysis</CardTitle>
              <CardDescription>6-month trend progression and predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={trendTimeline}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="sustainable" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="y2k" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="maximalist" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="minimalist" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendCategories.map((category, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }}></div>
                      <h3 className="font-semibold">{category.name}</h3>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {category.growth}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">{category.trends}</p>
                      <p className="text-sm text-gray-600">Active Trends</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Real-time Trend Monitoring</CardTitle>
              <CardDescription>Live tracking of trend mentions and sentiment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold">Live Monitoring Active</h4>
                      <p className="text-sm text-gray-600">Tracking 47 trends across 12 platforms</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Online
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Mentions/Hour</h4>
                    <p className="text-2xl font-bold text-blue-600">2,847</p>
                    <p className="text-sm text-gray-600">+12% from last hour</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Sentiment Score</h4>
                    <p className="text-2xl font-bold text-green-600">+0.73</p>
                    <p className="text-sm text-gray-600">Positive sentiment</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <h4 className="font-semibold mb-2">New Trends</h4>
                    <p className="text-2xl font-bold text-purple-600">3</p>
                    <p className="text-sm text-gray-600">Detected today</p>
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
