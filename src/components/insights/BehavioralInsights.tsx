
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, ScatterChart, Scatter } from 'recharts';
import { Brain, Users, ShoppingCart, Clock, TrendingUp, Eye, Heart, MessageSquare, Target, Zap, AlertCircle } from 'lucide-react';

const behaviorPatterns = [
  {
    pattern: 'Impulse Buying',
    frequency: 78,
    avgPurchaseTime: '2.3 minutes',
    triggerFactors: ['Limited time offers', 'Influencer posts', 'Flash sales'],
    demographics: ['Gen Z', 'Millennials'],
    conversionRate: 34,
    avgOrderValue: 127,
    seasonality: 'High during holidays'
  },
  {
    pattern: 'Research-Heavy Shopping',
    frequency: 23,
    avgPurchaseTime: '7.2 days',
    triggerFactors: ['Product reviews', 'Comparison content', 'Detailed descriptions'],
    demographics: ['Gen X', 'Baby Boomers'],
    conversionRate: 67,
    avgOrderValue: 289,
    seasonality: 'Consistent year-round'
  },
  {
    pattern: 'Social Proof Driven',
    frequency: 45,
    avgPurchaseTime: '4.1 hours',
    triggerFactors: ['User reviews', 'Social media posts', 'Celebrity endorsements'],
    demographics: ['Millennials', 'Gen Z'],
    conversionRate: 42,
    avgOrderValue: 156,
    seasonality: 'Peaks during trends'
  }
];

const purchaseJourney = [
  { stage: 'Awareness', dropoff: 15, avgTime: '2 days', touchpoints: 3.4 },
  { stage: 'Consideration', dropoff: 35, avgTime: '5 days', touchpoints: 7.2 },
  { stage: 'Intent', dropoff: 28, avgTime: '2 days', touchpoints: 4.1 },
  { stage: 'Purchase', dropoff: 12, avgTime: '1 day', touchpoints: 2.8 },
  { stage: 'Retention', dropoff: 45, avgTime: '30 days', touchpoints: 5.6 }
];

const customerSegments = [
  {
    name: 'Trend Chasers',
    size: 2340,
    behavior: {
      avgSessionTime: 12.4,
      pagesPerSession: 8.2,
      bounceRate: 34,
      conversionRate: 4.8,
      repeatPurchaseRate: 23
    },
    preferences: ['New arrivals', 'Trending items', 'Limited editions'],
    triggers: ['Influencer content', 'Social media', 'Email alerts'],
    loyaltyScore: 67
  },
  {
    name: 'Value Seekers',
    size: 3120,
    behavior: {
      avgSessionTime: 18.7,
      pagesPerSession: 12.1,
      bounceRate: 28,
      conversionRate: 6.2,
      repeatPurchaseRate: 45
    },
    preferences: ['Sales items', 'Bulk discounts', 'Comparison shopping'],
    triggers: ['Price alerts', 'Promotional emails', 'Seasonal sales'],
    loyaltyScore: 82
  },
  {
    name: 'Brand Loyalists',
    size: 1890,
    behavior: {
      avgSessionTime: 8.3,
      pagesPerSession: 4.6,
      bounceRate: 22,
      conversionRate: 12.4,
      repeatPurchaseRate: 78
    },
    preferences: ['Specific brands', 'Quality focus', 'Exclusive access'],
    triggers: ['Brand communications', 'VIP offers', 'New collections'],
    loyaltyScore: 94
  }
];

const behaviorMetrics = [
  { metric: 'Session Duration', value: 14.2, trend: '+8%', color: '#3B82F6' },
  { metric: 'Pages per Session', value: 7.8, trend: '+12%', color: '#8B5CF6' },
  { metric: 'Bounce Rate', value: 32, trend: '-5%', color: '#10B981' },
  { metric: 'Add to Cart Rate', value: 18.4, trend: '+15%', color: '#F59E0B' },
  { metric: 'Checkout Abandonment', value: 68, trend: '-8%', color: '#EF4444' },
  { metric: 'Return Visitor Rate', value: 45, trend: '+22%', color: '#6366F1' }
];

export const BehavioralInsights = () => {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [timeframe, setTimeframe] = useState('30days');

  const getTrendIcon = (trend: string) => {
    return trend.startsWith('+') ? (
      <TrendingUp className="w-4 h-4 text-green-600" />
    ) : (
      <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Behavioral Insights</h2>
          <p className="text-gray-600">Deep analysis of customer behavior patterns and purchase journeys</p>
        </div>
        <div className="flex space-x-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 Days</SelectItem>
              <SelectItem value="30days">30 Days</SelectItem>
              <SelectItem value="90days">90 Days</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <Brain className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Behavior Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {behaviorMetrics.map((metric, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.value}{metric.metric.includes('Rate') || metric.metric.includes('Duration') ? (metric.metric === 'Session Duration' ? 'min' : '%') : ''}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="patterns" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="patterns">Behavior Patterns</TabsTrigger>
          <TabsTrigger value="journey">Purchase Journey</TabsTrigger>
          <TabsTrigger value="segments">Customer Segments</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="patterns" className="space-y-6">
          <div className="space-y-4">
            {behaviorPatterns.map((pattern, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{pattern.pattern}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Frequency</p>
                          <p className="text-lg font-bold text-blue-600">{pattern.frequency}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Avg. Purchase Time</p>
                          <p className="text-lg font-bold">{pattern.avgPurchaseTime}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Conversion Rate</p>
                          <p className="text-lg font-bold text-green-600">{pattern.conversionRate}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Avg. Order Value</p>
                          <p className="text-lg font-bold text-purple-600">${pattern.avgOrderValue}</p>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Brain className="w-3 h-3 mr-1" />
                      AI Identified
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Trigger Factors</p>
                      <div className="flex flex-wrap gap-1">
                        {pattern.triggerFactors.map((factor, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Demographics</p>
                      <div className="flex flex-wrap gap-1">
                        {pattern.demographics.map((demo, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {demo}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Seasonality</p>
                      <p className="text-sm">{pattern.seasonality}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Progress value={pattern.frequency} className="flex-1 max-w-xs" />
                    <Button size="sm" className="ml-4">
                      <Target className="w-4 h-4 mr-1" />
                      Create Campaign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="journey" className="space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Customer Purchase Journey</CardTitle>
              <CardDescription>Analyze drop-off points and optimization opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {purchaseJourney.map((stage, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{stage.stage}</h4>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div>
                          <p className="text-sm text-gray-600">Drop-off Rate</p>
                          <p className="font-bold text-red-600">{stage.dropoff}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Avg. Time</p>
                          <p className="font-bold">{stage.avgTime}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Touchpoints</p>
                          <p className="font-bold">{stage.touchpoints}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Progress value={100 - stage.dropoff} className="w-24 h-2" />
                      <p className="text-xs text-gray-600 mt-1">{100 - stage.dropoff}% continue</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Zap className="w-4 h-4 mr-1" />
                      Optimize
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Journey Optimization Opportunities</CardTitle>
              <CardDescription>AI-identified areas for improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">High Drop-off at Consideration Stage</h4>
                    <p className="text-sm text-yellow-700">35% of users abandon during consideration. Consider adding more product reviews and comparison tools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Opportunity: Retargeting Campaign</h4>
                    <p className="text-sm text-blue-700">45% retention drop suggests need for better follow-up campaigns and loyalty programs.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          <div className="space-y-4">
            {customerSegments.map((segment, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{segment.name}</h3>
                      <p className="text-gray-600">{segment.size.toLocaleString()} customers</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Loyalty Score</p>
                      <p className="text-2xl font-bold text-purple-600">{segment.loyaltyScore}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Session Time</p>
                      <p className="font-bold">{segment.behavior.avgSessionTime} min</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pages/Session</p>
                      <p className="font-bold">{segment.behavior.pagesPerSession}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Bounce Rate</p>
                      <p className="font-bold">{segment.behavior.bounceRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Conversion</p>
                      <p className="font-bold text-green-600">{segment.behavior.conversionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Repeat Purchase</p>
                      <p className="font-bold text-blue-600">{segment.behavior.repeatPurchaseRate}%</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Preferences</p>
                      <div className="flex flex-wrap gap-1">
                        {segment.preferences.map((pref, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Key Triggers</p>
                      <div className="flex flex-wrap gap-1">
                        {segment.triggers.map((trigger, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {trigger}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm text-gray-600">Loyalty Score</p>
                        <Progress value={segment.loyaltyScore} className="w-32 h-2" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" className="bg-purple-600 text-white">
                        <Target className="w-4 h-4 mr-1" />
                        Target Segment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Behavior Predictions</CardTitle>
                <CardDescription>AI-powered predictions for customer behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-800">Increased Mobile Shopping</h4>
                    <Badge className="bg-green-100 text-green-800 border-green-200">94% confidence</Badge>
                  </div>
                  <p className="text-sm text-green-700">Mobile traffic expected to increase by 35% in next 30 days</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-800">Social Commerce Growth</h4>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">87% confidence</Badge>
                  </div>
                  <p className="text-sm text-blue-700">Social media driven purchases predicted to rise by 28%</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-800">Personalization Impact</h4>
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">91% confidence</Badge>
                  </div>
                  <p className="text-sm text-purple-700">Personalized experiences will drive 42% higher engagement</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Risk Alerts</CardTitle>
                <CardDescription>Potential issues requiring attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-red-800">Churn Risk</h4>
                    <Badge className="bg-red-100 text-red-800 border-red-200">High</Badge>
                  </div>
                  <p className="text-sm text-red-700">156 high-value customers showing early churn signals</p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-yellow-800">Conversion Drop</h4>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>
                  </div>
                  <p className="text-sm text-yellow-700">Mobile conversion rates declining by 8% weekly</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-orange-800">Engagement Drop</h4>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">Low</Badge>
                  </div>
                  <p className="text-sm text-orange-700">Email engagement rates showing downward trend</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
