import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-cream via-romantic-blush to-romantic-lavender">
      {/* Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Header Section */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-float mb-6">
            <Icon name="Heart" size={64} className="text-romantic-pink mx-auto mb-4" />
          </div>
          
          <h1 className="font-romantic text-4xl md:text-6xl lg:text-7xl text-romantic-gray mb-6 animate-fade-in">Ты готова к этому?</h1>
          
          <p className="font-romantic text-lg md:text-xl text-romantic-gray/80 max-w-2xl mx-auto mb-8 animate-fade-in text-center">Cоздано при поддержке: Массажный Салон "Коррекционочки", Энергокомпания "Пингвини", Федеральная Служба Безопасности , np s</p>
          
          <Button 
            size="lg" 
            className="bg-romantic-pink hover:bg-romantic-pink/90 text-romantic-gray font-romantic text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
          >Ниже йоу 💕</Button>
        </div>
        
        {/* Decorative hearts */}
        <div className="absolute top-10 left-10 animate-float">
          <Icon name="Heart" size={24} className="text-romantic-rose opacity-60" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Icon name="Heart" size={16} className="text-romantic-pink opacity-40" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Icon name="Heart" size={20} className="text-romantic-lavender opacity-50" />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-white/70 backdrop-blur-sm border-romantic-pink/20 shadow-lg">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="animate-float mb-6">
                <Icon name="Quote" size={48} className="text-romantic-pink mx-auto" />
              </div>
              
              <h3 className="font-elegant text-2xl md:text-3xl text-romantic-gray mb-6 animate-fade-in">Великая цитата</h3>
              
              {/* Added image */}
              <div className="mb-6 animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/files/9e0955e3-145a-4a6f-bd65-48e7f0e8a05b.png" 
                  alt="Романтичное фото" 
                  className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-romantic-pink/20 hover:border-romantic-pink/40 transition-all duration-300"
                />
              </div>
              
              <blockquote className="bg-romantic-cream/40 rounded-xl p-6 mb-6 animate-scale-in">
                <p className="font-romantic text-lg md:text-xl text-romantic-gray leading-relaxed italic mb-4">"Что такое счастье? Счастье, это счастье. Счастье - это вот, мы, вместе."</p>
                <cite className="font-romantic text-romantic-pink font-semibold not-italic">— Злата Константиновна💫</cite>
              </blockquote>
              
              <p className="font-romantic text-lg text-romantic-gray/80 animate-fade-in">Идём дальше zzzлата</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-elegant text-3xl md:text-4xl text-romantic-gray mb-4 animate-fade-in">Приглашение на Свидание</h2>
            <p className="font-romantic text-romantic-gray/70 max-w-md mx-auto">Ваааууу, я в шоках</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Photo cards */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="group overflow-hidden bg-white/80 backdrop-blur-sm border-romantic-pink/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  {index === 1 ? (
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/files/31d42c63-7d81-4d6c-a27e-6cf19b41adb8.png" 
                        alt="Романтичное фото пары" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-gradient-to-br from-romantic-rose to-romantic-lavender flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <Icon name="Image" size={48} className="text-romantic-gray/40 mx-auto mb-2" />
                        <p className="text-romantic-gray/60 font-romantic text-sm">
                          Место для фото #{index}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/80 backdrop-blur-sm border-romantic-pink/30 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="animate-float mb-6">
                <Icon name="Mail" size={48} className="text-romantic-pink mx-auto" />
              </div>
              
              <h3 className="font-elegant text-3xl md:text-4xl text-romantic-gray mb-8 animate-fade-in">Ну вот само же приглашение</h3>
              
              <div className="bg-romantic-cream/50 rounded-2xl p-8 mb-8 animate-scale-in">
                <p className="font-romantic text-lg md:text-xl text-romantic-gray leading-relaxed mb-6">Любимая ты моя, невзирая на всё, ты для меня важна и любима. Я тебя приглашаю на свидание, вот таким необычном образом.
Дату и время я предлагаю выбрать вместе. И место аналогичным образом.</p>
                
                <p className="font-romantic text-lg md:text-xl text-romantic-gray leading-relaxed mb-6">
                  Я хочу создать для нас особенный вечер, где время остановится, и будут только мы двое, 
                  звезды над головой и бесконечная любовь в наших сердцах.
                </p>
                
                <p className="font-romantic text-xl text-romantic-pink font-semibold">Будь моей звездой в этот момент ✨</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-romantic-pink hover:bg-romantic-pink/90 text-romantic-gray font-romantic text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Heart" size={20} className="mr-2" />
                  С удовольствием! 💖
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-romantic-pink text-romantic-gray hover:bg-romantic-pink/10 font-romantic text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Расскажи подробнее
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="font-romantic text-romantic-gray/60">
          Создано с 💕 специально для тебя
        </p>
      </footer>
    </div>
  );
}