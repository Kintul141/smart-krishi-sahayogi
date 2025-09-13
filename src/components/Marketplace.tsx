import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Filter,
  MapPin,
  Star,
  ShoppingCart,
  TrendingUp,
  Package
} from "lucide-react";
import { useState } from "react";

interface MarketplaceProps {
  onCreateListing: () => void;
}

const products = [
  {
    id: 1,
    name: "Fresh Organic Rice",
    price: 2400,
    unit: "quintal",
    seller: "Ravi Kumar",
    location: "Thrissur, Kerala",
    rating: 4.8,
    image: "🌾",
    category: "Grains",
    inStock: true
  },
  {
    id: 2,
    name: "Premium Coconut Oil",
    price: 180,
    unit: "liter",
    seller: "Meera Nair",
    location: "Kochi, Kerala", 
    rating: 4.9,
    image: "🥥",
    category: "Oil",
    inStock: true
  },
  {
    id: 3,
    name: "Fresh Vegetables Mix",
    price: 50,
    unit: "kg",
    seller: "Suresh Pillai",
    location: "Palakkad, Kerala",
    rating: 4.7,
    image: "🥬",
    category: "Vegetables",
    inStock: false
  },
  {
    id: 4,
    name: "Organic Turmeric Powder",
    price: 320,
    unit: "kg",
    seller: "Lakshmi Devi",
    location: "Wayanad, Kerala",
    rating: 4.9,
    image: "🌿",
    category: "Spices",
    inStock: true
  }
];

const categories = ["All", "Grains", "Vegetables", "Fruits", "Spices", "Oil", "Seeds"];

export function Marketplace({ onCreateListing }: MarketplaceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'buy' | 'sell'>('buy');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="gradient-farm p-6 text-primary-foreground">
        <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
        
        {/* View Toggle */}
        <div className="flex bg-white/20 rounded-lg p-1">
          <Button
            variant={viewMode === 'buy' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('buy')}
            className={`flex-1 ${viewMode === 'buy' ? 'bg-white text-primary' : 'text-primary-foreground hover:bg-white/20'}`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy
          </Button>
          <Button
            variant={viewMode === 'sell' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('sell')}
            className={`flex-1 ${viewMode === 'sell' ? 'bg-white text-primary' : 'text-primary-foreground hover:bg-white/20'}`}
          >
            <Package className="h-4 w-4 mr-2" />
            Sell
          </Button>
        </div>
      </div>

      <div className="p-6 -mt-4 space-y-6">
        {viewMode === 'buy' ? (
          <>
            {/* Search and Filter */}
            <Card className="p-4 shadow-card">
              <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products or sellers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "farm" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Market Insights */}
            <Card className="p-4 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-5 w-5 text-success" />
                <h3 className="font-semibold text-foreground">Market Insights</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">₹2,450</p>
                  <p className="text-sm text-muted-foreground">Rice avg. price</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">+5%</p>
                  <p className="text-sm text-muted-foreground">Weekly growth</p>
                </div>
              </div>
            </Card>

            {/* Product List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Available Products ({filteredProducts.length})
                </h3>
              </div>

              {filteredProducts.map((product) => (
                <Card key={product.id} className="p-4 shadow-card">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-primary-lighter rounded-lg flex items-center justify-center text-2xl">
                      {product.image}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{product.name}</h4>
                          <p className="text-sm text-muted-foreground">{product.seller}</p>
                        </div>
                        <Badge variant={product.inStock ? "default" : "secondary"}>
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-warning fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{product.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-primary">₹{product.price}</span>
                          <span className="text-sm text-muted-foreground">/{product.unit}</span>
                        </div>
                        <Button 
                          variant="farm" 
                          size="sm"
                          disabled={!product.inStock}
                        >
                          {product.inStock ? "Contact Seller" : "Notify Me"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          /* Sell View */
          <div className="space-y-6">
            <Card className="p-6 text-center shadow-card">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">Start Selling</h2>
              <p className="text-muted-foreground mb-6">
                List your products and connect with buyers in your area
              </p>
              <Button onClick={onCreateListing} variant="farm" size="lg" className="w-full">
                Create New Listing
              </Button>
            </Card>

            {/* Selling Tips */}
            <Card className="p-4 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Selling Tips</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p>Take clear, well-lit photos of your products</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p>Set competitive prices based on market rates</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p>Provide accurate product descriptions</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p>Respond quickly to buyer inquiries</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}