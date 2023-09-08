import pygame

# TODO: change update render to events


HEIGHT = 800

class Shape():
    def __init__(self,x = 0,y = 0,w = 0,h = 0,color = 0x000000):
        self.typ = "shape"

        self.x , self.y = x, y 
        self.w , self.h = w, h
        self.color = (color >> 16,color >> 8 & 0xFF,color & 0xFF)

    def render(self):
        pass

    def update(self):
        pass

class Rectangle(Shape):
    def __init__(self,x = 0,y = 0,w = 0,h = 0,color = 0x000000):
        super().__init__(x,y,w,h,color)
        self.typ = "rectangle"



    def render(self,screen):
        # TODO: create a rect
        pygame.draw.rect(screen,self.color,pygame.Rect(self.x,self.y,self.w,self.h))

    def update(self):
        pass


class App: 
    def __init__(self,output_file):
        # TODO: put asserts for expected props in output-file
        # aspect-ration, App
        
        # App data
        self.height = HEIGHT 
        self.width = HEIGHT / output_file["aspect-ration"]
        

        self.children = []
        if "children" in output_file["app"]:
            for child in output_file["app"]["children"]:
                if child["type"] == "rectangle":
                    self.children.append(
                        Rectangle(
                            child["props"]["rect"][0],
                            child["props"]["rect"][1],
                            child["props"]["rect"][2],
                            child["props"]["rect"][3],
                            child["props"]["color"],
                        )
                    )
                else:
                    assert False , f"[Unreachable State] unknown child type `{child['type']}`"

        self.props = []

        # pygame data
        self.done = False
        self.screen = pygame.display.set_mode((self.width,self.height))
        self.clock = pygame.time.Clock()



    def event(self):

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.done = True

        keys = pygame.key.get_pressed()
        if keys[pygame.K_ESCAPE]:
            self.done = True


    def update(self):
        for child in self.children:
            child.update()

    def render(self):
        self.screen.fill((0,0,0))

        for child in self.children:
            child.render(self.screen)

        pygame.display.flip()


    def run(self):
        while not self.done:
            self.clock.tick(60)

            self.event()
            self.update()
            self.render()


output_file = {
    "aspect-ration" : 16/9,
    "app" :  {
        "props" : [
            {"type": "backgroundcolor","value": 0x000000},
        ],
        "children": [
            {   
                "type" : "rectangle",
                "props": {
                    "color" : 0xFF0000,
                    "rect" :   [0,0,69,69],
                },
                "children": [],
            },
            {   
                "type" : "rectangle",
                "props": {
                    "color" : 0xFF00FF,
                    "rect" :   [420,420,10,10],
                },
                "children": [],
            }            
        ]
    }
}


pygame.init()
app = App(output_file)

app.run()

pygame.quit()