import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail,
  Settings,
  HelpCircle,
  LogOut,
  Edit3,
  Award,
  BarChart3,
  Globe
} from "lucide-react";

interface ProfileProps {
  farmerProfile: {
    name: string;
    location: string;
    farmSize: string;
    primaryCrop: string;
    experience: string;
    farmingType: string;
  };
  phoneNumber: string;
  onEditProfile: () => void;
}

export function Profile({ farmerProfile, phoneNumber, onEditProfile }: ProfileProps) {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="gradient-farm p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon" onClick={onEditProfile} className="text-primary-foreground hover:bg-white/20">
            <Edit3 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-6 -mt-4 space-y-6">
        {/* Profile Info */}
        <Card className="p-6 shadow-card">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">{farmerProfile.name}</h2>
            <div className="flex items-center justify-center gap-1 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{farmerProfile.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span className="text-foreground">+91 {phoneNumber}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Farm Size</p>
                <p className="font-semibold text-foreground">{farmerProfile.farmSize} acres</p>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-semibold text-foreground">{farmerProfile.experience} years</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary Crop:</span>
                <span className="font-medium text-foreground">{farmerProfile.primaryCrop}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Farming Type:</span>
                <span className="font-medium text-foreground">{farmerProfile.farmingType}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="p-4 shadow-card">
          <h3 className="font-semibold text-foreground mb-4">Your Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="h-6 w-6 text-success" />
              </div>
              <p className="text-lg font-bold text-foreground">15</p>
              <p className="text-xs text-muted-foreground">Activities Logged</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <p className="text-lg font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Products Listed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-2">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg font-bold text-foreground">8</p>
              <p className="text-xs text-muted-foreground">Days Active</p>
            </div>
          </div>
        </Card>

        {/* Settings & Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Settings</h3>
          
          <Card className="shadow-card">
            <div className="divide-y divide-border">
              <div className="p-4 flex items-center justify-between hover:bg-muted/50 transition-farm cursor-pointer">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">App Settings</span>
                </div>
                <span className="text-muted-foreground">›</span>
              </div>
              
              <div className="p-4 flex items-center justify-between hover:bg-muted/50 transition-farm cursor-pointer">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Language</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">English</span>
                  <span className="text-muted-foreground">›</span>
                </div>
              </div>
              
              <div className="p-4 flex items-center justify-between hover:bg-muted/50 transition-farm cursor-pointer">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Help & Support</span>
                </div>
                <span className="text-muted-foreground">›</span>
              </div>
            </div>
          </Card>

          <Button variant="destructive" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* App Info */}
        <Card className="p-4 shadow-card">
          <div className="text-center text-sm text-muted-foreground">
            <p>FarmAssist v1.0.0</p>
            <p>Made with ❤️ for farmers</p>
          </div>
        </Card>
      </div>
    </div>
  );
}