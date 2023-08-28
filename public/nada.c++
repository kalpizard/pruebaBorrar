

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 20, 4);

#include <Button.h>

Button button2(2); // Conecta tu botón entre el pin 2 y GND



void setup() {
    button2.begin();
    
    while (!Serial) { }; // para Leos
    Serial.begin(9600);
    
    lcd.init();
    lcd.backlight();
    lcd.clear();
}

void Palabras() {

    int i=0;

    lcd.clear();
    lcd.setCursor(0, i);
    lcd.print("Generar un key.");
    lcd.setCursor(0, i++);
    lcd.print("clonar repo");
    lcd.setCursor(0, i++);
    lcd.print("Crear ramas");
    lcd.setCursor(0, i++);
    lcd.print("subir ramas creadas");

}

void loop() {
    button2.read();

    if (button2.released()) {
Palabras();

        
    }

    delay(100); // Pequeña pausa para estabilidad
}





#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 20, 4);

#include <Button.h>
Button button2(2); // Conecta tu botón entre el pin 2 y GND

const char palabras[] = {
    "git add .",
    "git branch -M \"\"",
    "git status",
    "git push -u origin \"\"",
    "git commit -m \"\""
};

int numPalabras = sizeof(palabras) / sizeof(palabras[0]);
int posicionActual = 0;

void setup() {
    button2.begin();
    
    while (!Serial) { }; // para Leos
    Serial.begin(9600);
    
    lcd.init();
    lcd.backlight();
    lcd.clear();
}

void mostrarPalabra() {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(palabras[posicionActual]);
}

void loop() {
    button2.read();

    if (button2.released()) {
        posicionActual = (posicionActual + 1) % numPalabras; // Avanza a la siguiente palabra
        mostrarPalabra();
    }

    delay(100); // Pequeña pausa para estabilidad






//CHAT


#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 20, 4);

#include <Button.h>

Button button1(1); // Botón para incrementar i
Button button2(2); // Botón para decrementar i

int i = 0; // Variable global para controlar la posición de impresión en LCD

void setup() {
    button1.begin();
    button2.begin();
    
    while (!Serial) { }; // para Leos
    Serial.begin(9600);
    
    lcd.init();
    lcd.backlight();
    lcd.clear();
}

void Palabras() {
    lcd.clear();
    lcd.setCursor(0, i);
    lcd.print("Generar un key.");
    lcd.setCursor(0, i++);
    lcd.print("clonar repo");
    lcd.setCursor(0, i++);
    lcd.print("Crear ramas");
    lcd.setCursor(0, i++);
    lcd.print("subir ramas creadas");
}

void loop() {
    button1.read();
    button2.read();

    if (button1.released()) {
        i++; // Incrementar i cuando se presiona el botón 1
        Palabras();
    }

    if (button2.released()) {
        i--; // Decrementar i cuando se presiona el botón 2
        Palabras();
    }

    delay(100); // Pequeña pausa para estabilidad
}


