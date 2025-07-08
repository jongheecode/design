import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import loginBg from "@/assets/login-bg.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("로그인 시도:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google 로그인");
  };

  const handleKakaoLogin = () => {
    console.log("카카오 로그인");
  };

  return (
    <div 
      className="min-h-screen bg-gradient-bg bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.7), rgba(34, 34, 34, 0.8)), url(${loginBg})`
      }}
    >
      {/* Header with Logo */}
      <header className="w-full pt-8 pb-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-fade-in">
            캐릭터챗
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            AI 캐릭터들과 함께하는 특별한 대화
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md bg-gradient-card shadow-card border-border/50 animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-card-foreground">
              로그인
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              캐릭터들과의 대화를 시작해보세요
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                이메일
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border focus:border-primary transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-card-foreground">
                비밀번호
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border focus:border-primary transition-colors"
              />
            </div>

            {/* Login Button */}
            <Button 
              onClick={handleLogin}
              variant="warm"
              className="w-full"
              size="lg"
            >
              로그인
            </Button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-muted-foreground text-sm">
                계정이 없으신가요?{" "}
              </span>
              <Button 
                variant="link" 
                className="p-0 h-auto font-normal text-primary hover:text-primary/80"
              >
                회원가입
              </Button>
            </div>

            {/* Separator */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  또는
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleGoogleLogin}
                variant="google"
                className="w-full"
                size="lg"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google로 로그인
              </Button>
              
              <Button
                onClick={handleKakaoLogin}
                variant="kakao"
                className="w-full"
                size="lg"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3Z"/>
                </svg>
                카카오로 로그인
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="w-full pb-8 px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
            이순신, 무한도전, 라이언 같은 캐릭터들과
            <br className="hidden sm:block" />
            대화를 시작해보세요!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;