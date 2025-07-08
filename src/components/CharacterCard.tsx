import { MessageCircle, Edit, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface CharacterCardProps {
  id: string;
  name: string;
  description: string;
  avatar?: string;
  isPopular?: boolean;
  chatCount?: number;
  isMyCharacter?: boolean;
  onStartChat?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function CharacterCard({
  id,
  name,
  description,
  avatar,
  isPopular = false,
  chatCount = 0,
  isMyCharacter = false,
  onStartChat,
  onEdit,
  onDelete,
}: CharacterCardProps) {
  return (
    <Card className="group hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/30">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            {isPopular && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs animate-glow"
              >
                🔥
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>
              {chatCount > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Users className="w-3 h-3 mr-1" />
                  {chatCount.toLocaleString()}
                </div>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="neon"
                onClick={() => onStartChat?.(id)}
                className="flex-1"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                채팅 시작
              </Button>

              {isMyCharacter && (
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit?.(id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onDelete?.(id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}