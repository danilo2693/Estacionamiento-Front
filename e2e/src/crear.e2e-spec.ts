import { CrearPage } from './crear.po';
import { browser } from 'protractor';

describe('Estacionamiento Crear Registro Vehiculo', () => {
    let crear: CrearPage;
    const PLACACARRO = 'PLM21E';
    const PLACAMOTO = 'OLE85A';
    const PLACAMOTOCORTA = 'XD';
    const TIPOCARRO  = 0;
    const TIPOMOTO  = 1;
    const CILINDRAJE = 510;
    const SE_AGREGO_CON_EXITO = 'Se agrego el registro existosamente';
    const PLACA_MINIMO_3_LETRAS = 'La placa debe tener minimo 3 letras.';

    beforeEach(async () => {
        crear = new CrearPage();
        await crear.navigateTo();
    });

    it('deberia crear Registro Vehiculo MOTO', async () => {
        // Arrange
        await crear.clickTipoVehiculoSelect();
        await crear.setTipoToTipoVehiculoSelect(TIPOMOTO);
        await crear.setPlacaToPlate(PLACAMOTO);
        await crear.setCilindrajeToCilindraje(CILINDRAJE);
        await crear.esperarQueBotonGuardarAparezca();
        await crear.clickBtnRegisterButton();
        await crear.esperarQueToastAparezca();

        // Act
        const toast = await crear.getTextFromToast();

        // Assert
        expect(toast).toEqual(SE_AGREGO_CON_EXITO);
    });

    it('deberia crear Registro Vehiculo CARRO', async () => {
        // Arrange
        await crear.clickTipoVehiculoSelect();
        await crear.setTipoToTipoVehiculoSelect(TIPOCARRO);
        await crear.setPlacaToPlate(PLACACARRO);
        await crear.setCilindrajeToCilindraje(CILINDRAJE);
        await crear.esperarQueBotonGuardarAparezca();
        await crear.clickBtnRegisterButton();
        await crear.esperarQueToastAparezca();

        // Act
        const toast = await crear.getTextFromToast();

        // Assert
        expect(toast).toEqual(SE_AGREGO_CON_EXITO);
    });

    it('deberia aparecer error placa corta', async () => {
        // Arrange

        await crear.clickTipoVehiculoSelect();
        await crear.setTipoToTipoVehiculoSelect(TIPOMOTO);
        await crear.setPlacaToPlate(PLACAMOTOCORTA);
        await crear.setCilindrajeToCilindraje(CILINDRAJE);
        await crear.esperarQueBotonGuardarAparezca();
        await crear.clickBtnRegisterButton();
        await crear.esperarQueToastAparezca();

        // Act
        const toast = await crear.getTextFromToast();

        // Assert
        expect(toast).toEqual(PLACA_MINIMO_3_LETRAS);
    });
});
