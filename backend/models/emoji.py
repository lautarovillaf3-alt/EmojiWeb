class Emoji:
    def __init__(self, id, char, name, category, keywords):
        self.id = id
        self.char = char
        self.name = name
        self.category =category
        self.keywords = keywords

    def to_dict(self):
        return{
            "id": self.id,
            "char": self.char,
            "name": self.name,
            "category": self.category,
            "keyword": self.keywords
        }