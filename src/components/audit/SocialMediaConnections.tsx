
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, CheckCircle, AlertCircle, Settings, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  status: 'active' | 'error' | 'disconnected';
  lastSync: string;
  apiKey?: string;
  autoSync: boolean;
  dataPoints: string[];
}

const initialPlatforms: SocialPlatform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    connected: true,
    status: 'active',
    lastSync: '2 minutes ago',
    autoSync: true,
    dataPoints: ['Posts', 'Stories', 'Reels', 'Engagement', 'Audience Demographics']
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: <div className="w-5 h-5 bg-black rounded-sm"></div>,
    connected: true,
    status: 'active',
    lastSync: '5 minutes ago',
    autoSync: true,
    dataPoints: ['Videos', 'Views', 'Likes', 'Comments', 'Shares', 'Trending Sounds']
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    connected: true,
    status: 'error',
    lastSync: '2 hours ago',
    autoSync: false,
    dataPoints: ['Posts', 'Page Insights', 'Audience', 'Ad Performance']
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    icon: <Twitter className="w-5 h-5" />,
    connected: false,
    status: 'disconnected',
    lastSync: 'Never',
    autoSync: false,
    dataPoints: ['Tweets', 'Impressions', 'Engagement', 'Followers', 'Mentions']
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5" />,
    connected: true,
    status: 'active',
    lastSync: '10 minutes ago',
    autoSync: true,
    dataPoints: ['Videos', 'Views', 'Subscribers', 'Watch Time', 'Comments']
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    connected: false,
    status: 'disconnected',
    lastSync: 'Never',
    autoSync: false,
    dataPoints: ['Posts', 'Company Updates', 'Engagement', 'Followers', 'Demographics']
  }
];

export const SocialMediaConnections = () => {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>(initialPlatforms);
  const [showApiKey, setShowApiKey] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConnect = (platformId: string) => {
    setPlatforms(prev => prev.map(p => 
      p.id === platformId 
        ? { ...p, connected: true, status: 'active' as const, lastSync: 'Just now' }
        : p
    ));
    
    toast({
      title: "Platform Connected",
      description: `Successfully connected to ${platforms.find(p => p.id === platformId)?.name}`,
    });
  };

  const handleDisconnect = (platformId: string) => {
    setPlatforms(prev => prev.map(p => 
      p.id === platformId 
        ? { ...p, connected: false, status: 'disconnected' as const, lastSync: 'Never' }
        : p
    ));
  };

  const handleAutoSyncToggle = (platformId: string, enabled: boolean) => {
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, autoSync: enabled } : p
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800 border-red-200"><AlertCircle className="w-3 h-3 mr-1" />Error</Badge>;
      default:
        return <Badge variant="outline">Disconnected</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Connected Platforms</p>
                <p className="text-2xl font-bold">{platforms.filter(p => p.connected).length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Auto-Sync Enabled</p>
                <p className="text-2xl font-bold">{platforms.filter(p => p.autoSync).length}</p>
              </div>
              <Settings className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Data Points</p>
                <p className="text-2xl font-bold">{platforms.reduce((acc, p) => acc + p.dataPoints.length, 0)}</p>
              </div>
              <Key className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Connection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <Card key={platform.id} className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {platform.icon}
                  <div>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                    <CardDescription>Last sync: {platform.lastSync}</CardDescription>
                  </div>
                </div>
                {getStatusBadge(platform.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* API Key Section */}
              {platform.connected && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">API Configuration</label>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowApiKey(showApiKey === platform.id ? null : platform.id)}
                    >
                      <Settings className="w-4 h-4 mr-1" />
                      Configure
                    </Button>
                  </div>
                  
                  {showApiKey === platform.id && (
                    <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                      <Input 
                        placeholder="Enter API Key"
                        type="password"
                        value={platform.apiKey || ''}
                      />
                      <Input 
                        placeholder="App Secret (if required)"
                        type="password"
                      />
                      <Button size="sm" className="w-full">Save Configuration</Button>
                    </div>
                  )}
                </div>
              )}

              {/* Auto-sync Toggle */}
              {platform.connected && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Auto-sync Data</p>
                    <p className="text-xs text-gray-600">Automatically collect data every hour</p>
                  </div>
                  <Switch 
                    checked={platform.autoSync}
                    onCheckedChange={(checked) => handleAutoSyncToggle(platform.id, checked)}
                  />
                </div>
              )}

              {/* Data Points */}
              <div>
                <p className="text-sm font-medium mb-2">Available Data Points</p>
                <div className="flex flex-wrap gap-1">
                  {platform.dataPoints.map((dataPoint, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {dataPoint}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {platform.connected ? (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDisconnect(platform.id)}
                      className="flex-1"
                    >
                      Disconnect
                    </Button>
                    <Button size="sm" className="flex-1">
                      Sync Now
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => handleConnect(platform.id)}
                    className="w-full"
                  >
                    Connect {platform.name}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* API Documentation */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>API Integration Guide</CardTitle>
          <CardDescription>How to set up API connections for each platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Instagram Business API</h4>
              <p className="text-sm text-gray-600">Requires Meta Developer account and app setup</p>
              <ul className="text-xs text-gray-500 space-y-1 ml-4">
                <li>• Create Meta Developer App</li>
                <li>• Get Instagram Business Account ID</li>
                <li>• Generate long-lived access token</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">TikTok Business API</h4>
              <p className="text-sm text-gray-600">Access to TikTok for Business platform required</p>
              <ul className="text-xs text-gray-500 space-y-1 ml-4">
                <li>• Apply for TikTok Business API</li>
                <li>• Create developer application</li>
                <li>• Obtain access credentials</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">YouTube Analytics API</h4>
              <p className="text-sm text-gray-600">Google Cloud Console setup required</p>
              <ul className="text-xs text-gray-500 space-y-1 ml-4">
                <li>• Enable YouTube Analytics API</li>
                <li>• Create service account</li>
                <li>• Generate API credentials</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Twitter API v2</h4>
              <p className="text-sm text-gray-600">Twitter Developer Portal access needed</p>
              <ul className="text-xs text-gray-500 space-y-1 ml-4">
                <li>• Apply for developer access</li>
                <li>• Create Twitter app</li>
                <li>• Get bearer token</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
