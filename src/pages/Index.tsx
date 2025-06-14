
import React from 'react';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';
import { CustomerInsights } from '@/components/CustomerInsights';
import { TrendPrediction } from '@/components/TrendPrediction';
import { AIChat } from '@/components/AIChat';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fashion Intelligence Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Leverage AI-driven insights to revolutionize your fashion brand's approach to trend forecasting, 
            customer profiling, and predictive analytics.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Customer Insights
            </TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Trend Prediction
            </TabsTrigger>
            <TabsTrigger value="ai-chat" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <CustomerInsights />
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <TrendPrediction />
          </TabsContent>

          <TabsContent value="ai-chat" className="space-y-6">
            <AIChat />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
