
import React from 'react';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';
import { CustomerInsights } from '@/components/CustomerInsights';
import { TrendPrediction } from '@/components/TrendPrediction';
import { AIChat } from '@/components/AIChat';
import { CrossPlatformAudit } from '@/components/CrossPlatformAudit';
import { SuperfanIdentification } from '@/components/superfans/SuperfanIdentification';
import { AITrendPrediction } from '@/components/trends/AITrendPrediction';
import { PersonalizedMarketing } from '@/components/marketing/PersonalizedMarketing';
import { BehavioralInsights } from '@/components/insights/BehavioralInsights';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-[22px]">
        <div className="mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              AI-Powered Fashion Intelligence Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify superfans, predict trends, and deliver hyper-personalized marketing campaigns 
              that drive engagement and revenue for fashion brands.
            </p>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="superfans" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              Superfans
            </TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              AI Trends
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              Marketing
            </TabsTrigger>
            <TabsTrigger value="behavior" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              Behavior
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              Insights
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              Audit
            </TabsTrigger>
            <TabsTrigger value="ai-chat" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs">
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="superfans" className="space-y-6">
            <SuperfanIdentification />
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <AITrendPrediction />
          </TabsContent>

          <TabsContent value="marketing" className="space-y-6">
            <PersonalizedMarketing />
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            <BehavioralInsights />
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <CustomerInsights />
          </TabsContent>

          <TabsContent value="audit" className="space-y-6">
            <CrossPlatformAudit />
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
