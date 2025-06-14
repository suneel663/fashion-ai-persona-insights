
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, ShoppingBag, Target, Eye, Heart } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', sales: 12000, engagement: 65, trends: 23 },
  { month: 'Feb', sales: 15000, engagement: 72, trends: 28 },
  { month: 'Mar', sales: 18000, engagement: 68, trends: 31 },
  { month: 'Apr', sales: 22000, engagement: 75, trends: 29 },
  { month: 'May', sales: 25000, engagement: 82, trends: 35 },
  { month: 'Jun', sales: 28000, engagement: 78, trends: 33 },
];

const customerSegments = [
  { name: 'Super Fans', value: 15, color: '#8B5CF6' },
  { name: 'Regular Customers', value: 45, color: '#3B82F6' },
  { name: 'Occasional Buyers', value: 25, color: '#10B981' },
  { name: 'New Customers', value: 15, color: '#F59E0B' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,547</div>
            <p className="text-blue-100 text-sm mt-1">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Super Fans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,882</div>
            <p className="text-purple-100 text-sm mt-1">Top 15% engagement</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Trend Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
            <p className="text-green-100 text-sm mt-1">Prediction success rate</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Campaign ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">284%</div>
            <p className="text-orange-100 text-sm mt-1">Avg. return on investment</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Sales & Engagement Trends</CardTitle>
            <CardDescription>Monthly performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} />
                <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#8B5CF6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Customer Segmentation</CardTitle>
            <CardDescription>Distribution of customer types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4">
              {customerSegments.map((segment, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: segment.color }}></div>
                  {segment.name}: {segment.value}%
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Insights */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Real-time AI Insights</CardTitle>
          <CardDescription>Latest automated discoveries from your data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Trend Alert: Sustainable Fashion</h4>
                <p className="text-blue-700 text-sm">87% increase in eco-friendly product searches detected across your customer base</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Users className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-purple-900">Super Fan Behavior</h4>
                <p className="text-purple-700 text-sm">Top customers show 3x higher engagement with video content vs. static images</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
              <ShoppingBag className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900">Purchase Pattern</h4>
                <p className="text-green-700 text-sm">Weekend shoppers have 45% higher average order value than weekday customers</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
