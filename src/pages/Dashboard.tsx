import { useState } from "react";
import { Plus, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterCard } from "@/components/CharacterCard";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const popularCharacters = [
  {
    id: "1",
    name: "라이언",
    description: "카카오프렌즈의 귀여운 사자 캐릭터입니다. 항상 밝고 긍정적이에요!",
    avatar: "/placeholder-ryan.jpg",
    chatCount: 15420,
    isPopular: true,
  },
  {
    id: "2", 
    name: "광희",
    description: "무한도전의 예능인 광희입니다. 재미있는 이야기를 들려드릴게요!",
    avatar: "/placeholder-kwanghee.jpg",
    chatCount: 8950,
    isPopular: true,
  },
  {
    id: "3",
    name: "아이유",
    description: "가수 아이유입니다. 음악과 일상 이야기를 나눠요!",
    avatar: "/placeholder-iu.jpg", 
    chatCount: 23100,
    isPopular: true,
  },
  {
    id: "4",
    name: "이순신",
    description: "조선시대 명장 이순신입니다. 역사와 리더십에 대해 이야기해요.",
    avatar: "/placeholder-admiral.jpg",
    chatCount: 5670,
    isPopular: true,
  },
];

const myCharacters = [
  {
    id: "my1",
    name: "내 친구 봇",
    description: "일상 대화를 나누는 친근한 친구 캐릭터입니다.",
    avatar: "/placeholder-friend.jpg",
    chatCount: 45,
  },
  {
    id: "my2", 
    name: "공부 멘토",
    description: "학습을 도와주는 멘토 캐릭터입니다.",
    avatar: "/placeholder-mentor.jpg",
    chatCount: 120,
  },
];

export default function Dashboard() {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);

  const handleStartChat = (characterId: string) => {
    toast({
      title: "채팅 시작",
      description: "캐릭터와의 대화를 시작합니다.",
    });
    console.log("Start chat with:", characterId);
  };

  const handleEditCharacter = (characterId: string) => {
    toast({
      title: "캐릭터 수정",
      description: "캐릭터 정보를 수정합니다.",
    });
    console.log("Edit character:", characterId);
  };

  const handleDeleteCharacter = (characterId: string) => {
    toast({
      title: "캐릭터 삭제",
      description: "캐릭터가 삭제되었습니다.",
      variant: "destructive",
    });
    console.log("Delete character:", characterId);
  };

  const handleCreateCharacter = (method: 'direct' | 'prompt') => {
    setIsCreating(true);
    toast({
      title: "캐릭터 생성",
      description: method === 'direct' ? "직접 설정으로 캐릭터를 만듭니다." : "추천 프롬프트로 캐릭터를 만듭니다.",
    });
    
    setTimeout(() => {
      setIsCreating(false);
    }, 2000);
  };

  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      {/* Character Creation Section */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center">
            <Plus className="w-6 h-6 mr-2 text-primary" />
            새로운 캐릭터 만들기
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            나만의 AI 캐릭터를 생성하고 대화를 시작해보세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              size="lg"
              variant="warm"
              className="h-20 flex-col"
              onClick={() => handleCreateCharacter('direct')}
              disabled={isCreating}
            >
              <Wand2 className="w-6 h-6 mb-2" />
              <span>직접 설정하기</span>
              <span className="text-xs opacity-80">상세한 정보를 입력해서 만들기</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="h-20 flex-col border-primary/30 hover:bg-primary/10"
              onClick={() => handleCreateCharacter('prompt')}
              disabled={isCreating}
            >
              <Sparkles className="w-6 h-6 mb-2" />
              <span>추천 프롬프트</span>
              <span className="text-xs opacity-80">AI가 제안하는 프롬프트로 만들기</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Characters Section */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-primary" />
            추천 캐릭터
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            인기 있는 캐릭터들과 대화를 시작해보세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {popularCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                {...character}
                onStartChat={handleStartChat}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* My Characters Section */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground flex items-center">
            내 캐릭터 목록
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            내가 만든 캐릭터들을 관리하고 대화해보세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          {myCharacters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {myCharacters.map((character) => (
                <CharacterCard
                  key={character.id}
                  {...character}
                  isMyCharacter={true}
                  onStartChat={handleStartChat}
                  onEdit={handleEditCharacter}
                  onDelete={handleDeleteCharacter}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Plus className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                아직 만든 캐릭터가 없습니다
              </h3>
              <p className="text-muted-foreground mb-4">
                위의 '캐릭터 만들기' 버튼을 클릭해서 첫 번째 캐릭터를 만들어보세요!
              </p>
              <Button 
                variant="outline" 
                onClick={() => handleCreateCharacter('direct')}
              >
                지금 만들기
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}