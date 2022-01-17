import express from 'express';
import db from './database/connection';

const routes = express.Router()

routes.get('/general', async (request, response) => {
    const general_datas = await db('general_datas');

    return response.json(general_datas);
});

routes.post('/general', async (request, response) => {
    const {
        Iin,
        Iout,
        Vin
    } = request.body;

    const trx = await db.transaction();

    try {
        await trx('general_datas').insert({
            Iin,
            Iout,
            Vin
        });

        await trx.commit();

        return response.status(201).send();
    } catch (err) {
        await trx.rollback();

        console.log(err);

        return response.status(400).json({
            error: 'Ocorreu um erro inesperado ao tentar inserir os dados'
        })
    }


});

/*routes.get('/solar', async (request, response) => {
    const solar_datas = await db('solar_datas');

    return response.json(solar_datas);
});

routes.post('/solar', async (request, response) => {
    const {
        v_gerada,
        i_gerada,
        pot_gerada
    } = request.body;

    const trx = await db.transaction();

    try {
        await trx('solar_datas').insert({
            v_gerada,
            i_gerada,
            pot_gerada
        });

        await trx.commit();

        return response.status(201).send();
    } catch (err) {
        await trx.rollback();

        console.log(err);

        return response.status(400).json({
            error: 'Ocorreu um erro inesperado ao tentar inserir os dados'
        })
    }


});

routes.get('/eolica', async (request, response) => {
    const eolica_datas = await db('eolic_datas');

    return response.json(eolica_datas);
});

routes.post('/eolica', async (request, response) => {
    const {
        v_gerada,
        i_gerada,
        pot_gerada
    } = request.body;

    const trx = await db.transaction();

    try {
        await trx('eolic_datas').insert({
            v_gerada,
            i_gerada,
            pot_gerada
        });

        await trx.commit();

        return response.status(201).send();
    } catch (err) {
        await trx.rollback();

        console.log(err);

        return response.status(400).json({
            error: 'Ocorreu um erro inesperado ao tentar inserir os dados'
        })
    }


});

routes.get('/battery', async (request, response) => {
    const battery_datas = await db('battery_datas');

    return response.json(battery_datas);
});

routes.post('/battery', async (request, response) => {
    const {
        V_Armazenada,
        Vout,
        I,
        P_Armazenada,
        Pout
    } = request.body;

    const trx = await db.transaction();

    try {
        await trx('battery_datas').insert({
            V_Armazenada,
            Vout,
            I,
            P_Armazenada,
            Pout
        });

        await trx.commit();

        return response.status(201).send();
    } catch (err) {
        await trx.rollback();

        console.log(err);

        return response.status(400).json({
            error: 'Ocorreu um erro inesperado ao tentar inserir os dados'
        })
    }


}); */

export default routes;