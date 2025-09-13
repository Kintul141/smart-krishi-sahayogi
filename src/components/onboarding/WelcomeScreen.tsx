import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Users, TrendingUp } from "lucide-react";
import farmHero from "@/assets/farm-hero.jpg";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-sky flex flex-col">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={farmHero} 
          alt="Beautiful farmland landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white text-3xl font-bold mb-2">
            Welcome to FarmAssist
          </h1>
          <p className="text-white/90 text-lg">
            Your smart farming companion
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <div className="space-y-6">
          {/* Features */}
          <div className="grid gap-4">
            <Card className="p-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Smart Farming Tips</h3>
                  <p className="text-sm text-muted-foreground">Get AI-powered advice for your crops</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Community Market</h3>
                  <p className="text-sm text-muted-foreground">Connect with other farmers</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">Monitor your farming activities</p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button onClick={onNext} variant="farm" size="xl" className="w-full">
              Get Started
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Join thousands of farmers using FarmAssist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}