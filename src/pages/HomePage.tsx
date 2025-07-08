import { useState } from "react";
import { Sparkles, Wand2, Users, MessageCircle, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TopNavbar } from "@/components/TopNavbar";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

// Mock data for famous characters
const popularCharacters = [
  {
    id: "1",
    name: "김연아",
    description: "피겨 스케이팅 여왕과 함께하는 스포츠 토크와 인생 조언",
    avatar: "/placeholder-yuna.jpg",
    chatCount: 12340,
    category: "스포츠"
  },
  {
    id: "2", 
    name: "손흥민",
    description: "손세이셔널과 함께하는 축구 이야기와 꿈에 대한 대화",
    avatar: "/placeholder-sonny.jpg",
    chatCount: 18750,
    category: "스포츠"
  },
  {
    id: "3",
    name: "유재석",
    description: "국민 MC와 함께하는 유머 가득한 일상 대화",
    avatar: "/placeholder-yjs.jpg", 
    chatCount: 25600,
    category: "예능"
  },
  {
    id: "4",
    name: "아이유",
    description: "국민 여동생과 함께하는 음악과 감성 대화",
    avatar: "/placeholder-iu.jpg",
    chatCount: 31200,
    category: "음악"
  },
  {
    id: "5",
    name: "BTS 지민",
    description: "월드 스타와 함께하는 K-POP과 꿈에 대한 이야기",
    avatar: "/placeholder-jimin.jpg",
    chatCount: 45800,
    category: "음악"
  },
  {
    id: "6",
    name: "백종원",
    description: "요리계의 대부와 함께하는 맛있는 요리 이야기",
    avatar: "/placeholder-baek.jpg",
    chatCount: 14500,
    category: "요리"
  }
];

// Prompt suggestion cards
const promptSuggestions = [
  {
    id: "p1",
    title: "지하철 안내봇",
    description: "친절하고 정확한 교통 정보를 제공하는 AI",
    icon: "🚇",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "p2",
    title: "훈훈한 학원선생님",
    description: "따뜻하고 격려를 아끼지 않는 교육 멘토",
    icon: "👨‍🏫",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "p3",
    title: "건강 관리 코치",
    description: "운동과 식단을 관리해주는 건강 전문가",
    icon: "💪",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "p4",
    title: "감성 상담사",
    description: "마음의 고민을 들어주는 따뜻한 친구",
    icon: "💝",
    color: "from-pink-500 to-purple-500"
  }
];

// My characters data
const myCharacters = [
  {
    id: "my1",
    name: "내 비서봇",
    description: "개인 스케줄과 업무를 관리해주는 AI",
    avatar: "/placeholder-assistant.jpg",
    chatCount: 156
  },
  {
    id: "my2", 
    name: "스터디 메이트",
    description: "함께 공부하고 동기부여해주는 친구",
    avatar: "/placeholder-study.jpg",
    chatCount: 89
  }
];

export default function HomePage() {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);

  const handleStartChat = (characterId: string, characterName: string) => {
    toast({
      title: "채팅 시작",
      description: `${characterName}과(와)의 대화를 시작합니다.`,
    });
  };

  const handleCreateCharacter = (method: 'direct' | 'select') => {
    setIsCreating(true);
    toast({
      title: "캐릭터 생성",
      description: method === 'direct' ? "직접 설정으로 이동합니다." : "캐릭터 선택 페이지로 이동합니다.",
    });
    
    setTimeout(() => {
      setIsCreating(false);
    }, 2000);
  };

  const handlePromptSelect = (promptTitle: string) => {
    toast({
      title: "프롬프트 선택",
      description: `"${promptTitle}" 프롬프트로 캐릭터를 생성합니다.`,
    });
  };

  const handleEditCharacter = (characterId: string) => {
    toast({
      title: "캐릭터 수정",
      description: "캐릭터 편집 페이지로 이동합니다.",
    });
  };

  const handleDeleteCharacter = (characterId: string) => {
    toast({
      title: "캐릭터 삭제",
      description: "캐릭터가 삭제되었습니다.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <TopNavbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 40, 57, 0.8), rgba(34, 40, 57, 0.9)), url(${heroBg})`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-glow-text">
              AI 캐릭터 만들기
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              당신만의 특별한 AI 캐릭터를 만들고
              <br className="hidden md:block" />
              꿈꿔왔던 대화를 시작해보세요
            </p>
            
            <Button
              size="lg"
              variant="hero"
              className="text-xl px-12 py-6 rounded-xl animate-neon-pulse"
              onClick={() => handleCreateCharacter('direct')}
            >
              <Sparkles className="w-6 h-6 mr-3" />
              지금 시작하기
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Create Character Options */}
        <section className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon-blue transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-neon-pulse">
                  <Wand2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">직접 설정하기</h3>
                <p className="text-muted-foreground mb-6">
                  캐릭터의 성격, 말투, 배경을 직접 설정해서 나만의 완벽한 AI를 만들어보세요
                </p>
                <Button
                  variant="neon-outline"
                  size="lg"
                  className="w-full"
                  onClick={() => handleCreateCharacter('direct')}
                  disabled={isCreating}
                >
                  설정 시작하기
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon-pink transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-neon-pulse">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">캐릭터 선택하기</h3>
                <p className="text-muted-foreground mb-6">
                  유명 인물이나 대중적인 캐릭터를 기반으로 빠르게 AI를 생성해보세요
                </p>
                <Button
                  variant="neon-pink"
                  size="lg"
                  className="w-full"
                  onClick={() => handleCreateCharacter('select')}
                  disabled={isCreating}
                >
                  캐릭터 둘러보기
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Prompt Suggestions */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">프롬프트 추천</h2>
            <p className="text-muted-foreground text-lg">
              인기 있는 캐릭터 유형을 빠르게 시작해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promptSuggestions.map((prompt, index) => (
              <Card 
                key={prompt.id}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer group animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handlePromptSelect(prompt.title)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {prompt.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {prompt.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {prompt.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Characters */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">인기 캐릭터</h2>
            <p className="text-muted-foreground text-lg">
              유명 인물들과 특별한 대화를 나눠보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCharacters.map((character) => (
              <Card 
                key={character.id}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon-blue transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/30 group-hover:border-primary transition-colors">
                      <AvatarImage src={character.avatar} alt={character.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        {character.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">{character.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {character.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Users className="w-3 h-3 mr-1" />
                        {character.chatCount.toLocaleString()} 대화
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {character.description}
                  </p>

                  <Button
                    variant="neon"
                    size="sm"
                    className="w-full"
                    onClick={() => handleStartChat(character.id, character.name)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    채팅 시작
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* My Characters */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">내가 만든 캐릭터</h2>
            <p className="text-muted-foreground text-lg">
              나만의 AI 캐릭터들을 관리하고 대화해보세요
            </p>
          </div>

          {myCharacters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCharacters.map((character) => (
                <Card 
                  key={character.id}
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon-pink transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-secondary/30">
                        <AvatarImage src={character.avatar} alt={character.name} />
                        <AvatarFallback className="bg-secondary/10 text-secondary">
                          {character.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{character.name}</h3>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {character.chatCount} 대화
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {character.description}
                    </p>

                    <div className="flex space-x-2">
                      <Button
                        variant="neon"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleStartChat(character.id, character.name)}
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        채팅
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditCharacter(character.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteCharacter(character.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gradient-card border-border/50 shadow-card max-w-md mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  첫 캐릭터를 만들어보세요
                </h3>
                <p className="text-muted-foreground mb-6">
                  나만의 AI 캐릭터를 만들고 특별한 대화를 시작해보세요
                </p>
                <Button 
                  variant="neon-outline" 
                  onClick={() => handleCreateCharacter('direct')}
                >
                  지금 만들기
                </Button>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}