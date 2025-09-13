import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Sun, 
  Cloud, 
  Droplets, 
  TrendingUp, 
  Bell,
  Calendar,
  IndianRupee,
  Thermometer
} from "lucide-react";
import { useState } from "react";

interface DashboardProps {
  farmerName: string;
  onChatOpen: () => void;
}

export function Dashboard({ farmerName, onChatOpen }: DashboardProps) {
  const [currentTime] = useState(new Date());

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-gradient-sky pb-20">
      {/* Header */}
      <div className="gradient-farm p-6 text-primary-foreground">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-primary-foreground/80 text-sm">
              {getGreeting()}!
            </p>
            <h1 className="text-2xl font-bold">
              {farmerName}
            </h1>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="text-primary-foreground/90 text-sm">
          {currentTime.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <div className="p-6 space-y-6 -mt-4">
        {/* AI Chatbot CTA */}
        <Card className="p-6 shadow-card bg-gradient-to-br from-primary-lighter to-white border-primary/20">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Ask Your AI Assistant</h2>
            <p className="text-muted-foreground mb-6">
              Get instant farming advice, weather updates, and expert tips
            </p>
            <Button onClick={onChatOpen} variant="farm" size="lg" className="w-full">
              Start Conversation
            </Button>
          </div>
        </Card>

        {/* Quick Glance */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Glance</h3>
          
          {/* Weather Card */}
          <Card className="p-4 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Sun className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Today's Weather</h4>
                  <p className="text-sm text-muted-foreground">Sunny, 28°C</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-blue-600">
                  <Droplets className="h-4 w-4" />
                  <span className="text-sm">20%</span>
                </div>
                <p className="text-xs text-muted-foreground">Rain chance</p>
              </div>
            </div>
          </Card>

          {/* Today's Reminders */}
          <Card className="p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Today's Tasks</h4>
                <p className="text-sm text-muted-foreground">3 activities scheduled</p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </Card>

          {/* Market Prices */}
          <Card className="p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Rice Market Price</h4>
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-success" />
                  <span className="text-lg font-semibold text-success">₹2,450/quintal</span>
                  <span className="text-xs text-success bg-success/20 px-2 py-1 rounded">+5%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Latest Advisory */}
          <Card className="p-4 shadow-card">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                <Thermometer className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Latest Advisory</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Apply nitrogen fertilizer during early morning hours. Avoid afternoon application due to high temperature.
                </p>
                <Button variant="link" className="p-0 h-auto text-sm mt-2">
                  Read more
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center shadow-card hover:shadow-lg transition-farm cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm text-foreground">Log Activity</h4>
            </Card>
            
            <Card className="p-4 text-center shadow-card hover:shadow-lg transition-farm cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <h4 className="font-semibold text-sm text-foreground">Check Prices</h4>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}