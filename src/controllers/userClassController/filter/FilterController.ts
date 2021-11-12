import { Request, Response } from "express";
import { Like } from "typeorm";

import { IFilterController } from "./IFilterController";
import { FilterService } from "../../../services/classServices/filter/FilerService";
import { removeNullFields } from "../../../utils/removeNullFields";
import { Fail } from "../../../entities/Error";

export class FilterController implements IFilterController {
  async handle(req: Request, res: Response) {
    const query = {
      class: req.query.class ? String(req.query.class) : null,
      user: req.query.user ? String(req.query.user) : null,
    };

    const filter = new FilterService();

    const response = await filter.execute(removeNullFields(query));
    if (response.length === 0)
      throw new Fail(
        404,
        `Couldn't find an relation between class and user with these params`
      );

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
