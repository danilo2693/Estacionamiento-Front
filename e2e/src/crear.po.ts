import { browser, by, element, $, ElementFinder, ExpectedConditions, ProtractorExpectedConditions } from 'protractor';

export class CrearPage {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }
    navigateTo(urlNuevoRegistro = 'nuevoRegistro'): Promise<any> {
        return browser.get(`${browser.baseUrl}${urlNuevoRegistro}`) as Promise<any>;
    }

    getTipoDeVehiculoSelect(): ElementFinder {
        return $('#tipo');
    }

    getPlacaInput(): ElementFinder {
        return $('#placa');
    }

    getCilindrajeInput(): ElementFinder {
        return $('#cilindraje');
    }

    getGuardarButton(): ElementFinder {
        return $('#guardar');
    }

    getMensajeToast(): ElementFinder {
        return element(by.className('toast-message'));
    }

    async setTipoToTipoVehiculoSelect(tipo: number): Promise<void> {
       await browser.sleep(500);
       element( by.css( '#tipo option[value="' + tipo + '"]' ) ).click();
    }

    async setPlacaToPlate(placa: string): Promise<void> {
        return await this.getPlacaInput().sendKeys(placa);
    }

    async setCilindrajeToCilindraje(cilindraje: number): Promise<void> {
        return await this.getCilindrajeInput().sendKeys(cilindraje);
    }

    async clickTipoVehiculoSelect(): Promise<void> {
        await this.getTipoDeVehiculoSelect().click();
    }

     async clickBtnRegisterButton(): Promise<void> {
        await this.getGuardarButton().click();
    }

    async getTextFromToast(): Promise<string> {
        return await this.getMensajeToast().getText();
    }

    async esperarQueBotonGuardarAparezca(): Promise<void> {
        return await this.esperarElementoAparezca(this.getGuardarButton());
    }

    async esperarQueToastAparezca(): Promise<void> {
        return await this.esperarElementoAparezca(this.getMensajeToast());
    }

    async esperarElementoAparezca(element: ElementFinder): Promise<void> {
        const id = await element.getId();
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `El elemento ${id} esta tardando mucho en aparecer en el DOM`
        );
    }
}
