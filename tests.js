describe("The Greeting function", function() {
    
    it("should be able to set the name", function(){
        let greetingSetting = Greeting();

        greetingSetting.setName("Nobuhle");
        assert.equal("Nobuhle", greetingSetting.getName());

        let greetingSetting2 = Greeting();

      greetingSetting2.setName("Khathele");
        assert.equal("Khathele", greetingSetting2.getName());
    });

    it("should be able to take in the name and greet in English", function(){
        let greetingSetting = Greeting();
        assert.equal("Hello Nobuhle", greetingSetting.greet("English", "Nobuhle"));

        let greetSetting2 = Greeting();
        assert.equal("Hello Zuki", greetingSetting.greet("English","Zuki")); 
    });

    it("should be able to take in the name and greet in Afrikaans", function(){
        let greetingSetting = Greeting();
        assert.equal("Groet Makhosazane", greetingSetting.greet("Afrikaans", "Makhosazane")); 
        
        let greetSetting2 = Greeting();
       it("should return please name", function(){
        let greetingSetting = Greeting();

        greetingSetting.setName([""]);
        assert.equal("", greetingSetting.getName())
});

    });

    it("should be able to take in the name and greet in Isixhosa", function(){
        let greetingSetting = Greeting();
        assert.equal("Molo Rethabile", greetingSetting.greet("Isixhosa", "Rethabile"));

        let greetSetting2 = Greeting();
        assert.equal("Molo Zuzu", greetingSetting.greet("Isixhosa","Zuzu"))
        
    });

    it('should return the number of people that have been greeted' , function(){
        let greetingSetting = Greeting();

        greetingSetting.setName(["Nobuhle"])
        assert.equal(1,greetingSetting.greetCounter(["Nobuhle"]))
    }); 

    it('should check if the name is already greated' , function(){
        let greetingSetting = Greeting();

        greetingSetting.setName(["buhle"])
        greetingSetting.setName(["Buhle"])
        assert.equal(1,greetingSetting.greetCounter())
    }); 

    it("should return please name", function(){
        let greetingSetting = Greeting();

        greetingSetting.setName([""]);
        assert.equal("", greetingSetting.getName())
});

it("should return Please select the language", function(){
    let greetingSetting = Greeting();
    
    greetingSetting.setName([""]);
    assert.equal("", greetingSetting.getName()); 
});

it("should return Please enter name and select the language", function(){
    let greetingSetting = Greeting();
    
    greetingSetting.setName([""]);
    assert.equal("", greetingSetting.getName()); 
});

});    
