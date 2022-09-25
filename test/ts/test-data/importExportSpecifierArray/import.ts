import {Bar} from './export';

interface Foo {
  fooProp1: string;
  fooProp2: number;
  fooProp3: Bar[];
  /* tslint:disable */
  fooProp4: Array<Bar>;
  /* tslint:enable */
}

const expectedImportExportSpecifierArray = {
  Foo: {
    fooProp1:
      'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
    fooProp2: 86924,
    fooProp3: [{
      barProp1:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
      barProp2: 86924,
      barProp3: true,
    }, {
      barProp1:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
      barProp2: 86924,
      barProp3: true,
    }, {
      barProp1:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
      barProp2: 86924,
      barProp3: true,
    }],
    fooProp4: [{
      barProp1:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
      barProp2: 86924,
      barProp3: true,
    }, {
      barProp1:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
      barProp2: 86924,
      barProp3: true,
    }, {
      barProp1:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
      barProp2: 86924,
      barProp3: true,
    }],
  },
};

export {expectedImportExportSpecifierArray};
