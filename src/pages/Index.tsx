
import React from 'react';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';
import { CustomerInsights } from '@/components/CustomerInsights';
import { TrendPrediction } from '@/components/TrendPrediction';
import { AIChat } from '@/components/AIChat';
import { CrossPlatformAudit } from '@/components/CrossPlatformAudit';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-[22px]">
        <div className="mb-8">
          
          
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Customer Insights
            </TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Trend Prediction
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Platform Audit
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
