
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Sparkles, TrendingUp, Users, Target } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const initialMessages: Message[] = [
  {
    id: '1',
    type: 'ai',
    content: 'Hello! I\'m your AI Fashion Intelligence Assistant. I can help you analyze customer data, predict trends, identify opportunities, and optimize your marketing strategies. What would you like to explore today?',
    timestamp: new Date(),
    suggestions: [
      'Show me top performing products this month',
      'Analyze customer sentiment for sustainable fashion',
      'Predict next quarter\'s trending colors',
      'Identify super fans in the 25-34 age group'
    ]
  }
];

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
        suggestions: generateSuggestions(inputValue)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('trend') || lowerInput.includes('prediction')) {
      return 'Based on current data analysis, I\'ve identified several emerging trends:\n\n🌱 **Sustainable Fashion** is showing 82% growth in mentions across social platforms\n📱 **Tech-Wear Integration** is gaining momentum with 45% increase in searches\n👥 **Gender-Neutral Designs** are trending particularly well with Gen Z customers\n\nThe confidence level for these predictions is 87% based on our AI models analyzing over 50,000 data points from social media, purchase patterns, and search trends.';
    }
    
    if (lowerInput.includes('customer') || lowerInput.includes('fan')) {
      return 'Your customer analysis shows fascinating patterns:\n\n⭐ **Super Fans (Top 15%)** have an average engagement score of 89/100\n💰 They spend 3.2x more than regular customers\n📱 87% are active on Instagram, 72% on TikTok\n🛍️ Purchase frequency: 2.4x per month vs 0.8x for regular customers\n\nKey insight: Super fans respond 65% better to video content and personalized recommendations. Would you like me to create a targeted campaign strategy?';
    }
    
    if (lowerInput.includes('product') || lowerInput.includes('perform')) {
      return 'Here\'s your top-performing product analysis:\n\n🏆 **Eco-Friendly Denim Collection** - 342% ROI\n👕 **Minimalist Basics Line** - 287% ROI\n👟 **Sustainable Sneakers** - 261% ROI\n\n📊 **Key Success Factors:**\n• Products with sustainability messaging perform 40% better\n• Items priced $50-120 have highest conversion rates\n• Video product demos increase sales by 67%\n\nRecommendation: Focus marketing budget on eco-friendly products with video content for maximum impact.';
    }
    
    return 'I\'ve analyzed your request and here are the key insights:\n\n📈 Your brand shows strong performance across multiple metrics\n🎯 Customer engagement is 23% above industry average\n💡 I recommend focusing on sustainable product lines and personalized marketing\n\nWould you like me to dive deeper into any specific area of your fashion business?';
  };

  const generateSuggestions = (input: string): string[] => {
    const suggestions = [
      'Analyze seasonal trend patterns',
      'Create customer personas based on purchase behavior',
      'Predict inventory needs for next quarter',
      'Optimize social media posting schedule',
      'Identify cross-selling opportunities',
      'Analyze competitor performance',
      'Suggest pricing strategies for new products',
      'Create targeted marketing campaigns'
    ];
    
    return suggestions.slice(0, 4);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <div className="space-y-6">
      {/* AI Assistant Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Bot className="w-8 h-8 mr-3" />
            AI Fashion Intelligence Assistant
          </CardTitle>
          <CardDescription className="text-blue-100">
            Powered by advanced machine learning models trained on fashion industry data
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold">Trending Now</div>
                <div className="text-sm text-gray-600">Sustainable fashion +87%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold">Top Segment</div>
                <div className="text-sm text-gray-600">Eco-conscious millennials</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold">Best Channel</div>
                <div className="text-sm text-gray-600">Instagram video ads</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
            AI Chat Interface
          </CardTitle>
          <CardDescription>Ask me anything about your fashion business data and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <ScrollArea className="h-96 w-full border rounded-lg p-4 bg-white/50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className={message.type === 'user' ? 'bg-blue-100' : 'bg-purple-100'}>
                          {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        {message.suggestions && (
                          <div className="mt-3 space-y-2">
                            <div className="text-xs text-gray-500 font-medium">Suggested follow-ups:</div>
                            <div className="flex flex-wrap gap-1">
                              {message.suggestions.map((suggestion, index) => (
                                <Badge 
                                  key={index} 
                                  variant="outline" 
                                  className="cursor-pointer text-xs hover:bg-purple-50"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                >
                                  {suggestion}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-purple-100">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="p-3 rounded-lg bg-gray-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about trends, customers, predictions, or any business insights..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
