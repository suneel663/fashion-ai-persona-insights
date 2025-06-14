
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Target, Lightbulb, Clock, Users } from 'lucide-react';

const insights = [
  {
    type: 'opportunity',
    icon: <TrendingUp className="w-5 h-5 text-green-600" />,
    title: 'TikTok Growth Opportunity',
    description: 'Your TikTok engagement rate is 2x higher than industry average. Consider increasing posting frequency.',
    impact: 'High',
    actionable: true,
    recommendation: 'Post 2-3 times daily on TikTok during peak hours (6-9 PM)',
    metrics: '+45% potential reach increase'
  },
  {
    type: 'warning',
    icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
    title: 'Facebook Engagement Decline',
    description: 'Facebook engagement has dropped 15% over the last month. Audience may be shifting to other platforms.',
    impact: 'Medium',
    actionable: true,
    recommendation: 'Test video content and consider Facebook Reels to re-engage audience',
    metrics: '-15% engagement decline'
  },
  {
    type: 'success',
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    title: 'Instagram Reels Performance',
    description: 'Your Instagram Reels consistently outperform static posts by 300%. Great content strategy!',
    impact: 'High',
    actionable: false,
    recommendation: 'Continue current Reels strategy and consider creating series content',
    metrics: '+300% better performance than static posts'
  },
  {
    type: 'insight',
    icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    title: 'Optimal Posting Schedule',
    description: 'AI analysis shows your audience is most active Tuesday-Thursday, 6-9 PM EST.',
    impact: 'Medium',
    actionable: true,
    recommendation: 'Schedule 70% of content during these peak engagement windows',
    metrics: 'Up to 25% engagement boost potential'
  }
];

const audienceInsights = [
  {
    platform: 'Instagram',
    audienceMatch: 92,
    demographics: '18-34 years, 68% female',
    interests: ['Fashion', 'Lifestyle', 'Beauty'],
    behaviorPattern: 'Active during lunch and evening hours'
  },
  {
    platform: 'TikTok',
    audienceMatch: 88,
    demographics: '16-28 years, 72% female',
    interests: ['Trends', 'DIY Fashion', 'Dance'],
    behaviorPattern: 'Peak activity after school/work hours'
  },
  {
    platform: 'YouTube',
    audienceMatch: 85,
    demographics: '22-40 years, 58% female',
    interests: ['Tutorials', 'Reviews', 'Fashion Hauls'],
    behaviorPattern: 'Weekend binge-watching sessions'
  }
];

const competitorAnalysis = [
  {
    competitor: 'Fashion Brand A',
    followersGrowth: '+12%',
    engagementRate: '5.2%',
    postingFrequency: '2x daily',
    topContent: 'Behind-the-scenes videos',
    insight: 'Strong authentic content strategy'
  },
  {
    competitor: 'Fashion Brand B',
    followersGrowth: '+8%',
    engagementRate: '3.8%',
    postingFrequency: '1x daily',
    topContent: 'Product showcases',
    insight: 'High-quality product photography'
  }
];

export const AuditInsights = () => {
  return (
    <div className="space-y-6">
      {/* AI Insights Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">AI Insights</p>
                <p className="text-2xl font-bold">{insights.length}</p>
              </div>
              <Brain className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Opportunities</p>
                <p className="text-2xl font-bold">{insights.filter(i => i.type === 'opportunity').length}</p>
              </div>
              <Target className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Alerts</p>
                <p className="text-2xl font-bold">{insights.filter(i => i.type === 'warning').length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Avg. Match Score</p>
                <p className="text-2xl font-bold">88%</p>
              </div>
              <Users className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI-Generated Insights */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-6 h-6 mr-2 text-purple-600" />
            AI-Generated Insights & Recommendations
          </CardTitle>
          <CardDescription>Automated analysis of your cross-platform performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    {insight.icon}
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{insight.title}</h4>
                      <p className="text-gray-600 mt-1">{insight.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={insight.impact === 'High' ? 'default' : 'secondary'}>
                      {insight.impact} Impact
                    </Badge>
                    {insight.actionable && <Badge variant="outline">Actionable</Badge>}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-3">
                  <h5 className="font-medium text-blue-900 mb-1">💡 Recommendation</h5>
                  <p className="text-blue-800 text-sm">{insight.recommendation}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{insight.metrics}</span>
                  {insight.actionable && (
                    <Button size="sm" variant="outline">
                      Implement Suggestion
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audience Intelligence */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Cross-Platform Audience Intelligence</CardTitle>
          <CardDescription>AI analysis of your audience across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audienceInsights.map((audience, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{audience.platform}</h4>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Audience Match</div>
                    <div className="font-bold text-green-600">{audience.audienceMatch}%</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Demographics:</span>
                    <p className="font-medium">{audience.demographics}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Top Interests:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {audience.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Behavior:</span>
                    <p className="font-medium">{audience.behaviorPattern}</p>
                  </div>
                </div>
                
                <Progress value={audience.audienceMatch} className="mt-3 h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitor Analysis */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>AI Competitor Analysis</CardTitle>
          <CardDescription>Insights from analyzing similar fashion brands</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitorAnalysis.map((competitor, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{competitor.competitor}</h4>
                  <Badge variant="outline">{competitor.insight}</Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Growth</span>
                    <p className="font-semibold text-green-600">{competitor.followersGrowth}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Engagement</span>
                    <p className="font-semibold">{competitor.engagementRate}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Posting</span>
                    <p className="font-semibold">{competitor.postingFrequency}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Top Content</span>
                    <p className="font-semibold">{competitor.topContent}</p>
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
