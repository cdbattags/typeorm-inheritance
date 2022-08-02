# To Reproduce the Issue

## Install Dependencies

```bash
yarn
```

## Generate Migration

```bash
yarn typeorm migration:generate test
```

## Run Migration

```bash
yarn typeorm migration:run
```

## Start the Server

```bash
yarn dev
```

## Navigate to Home

Go to [http://localhost:3000](http://localhost:3000)

## See Error

```
error - ReferenceError: Cannot access 'FullAuditEntity' before initialization
at Module.FullAuditEntity (webpack-internal:///(api)/./src/entities/common/FullAuditEntity.ts:4:64)
at eval (webpack-internal:///(api)/./src/entities/common/WithOwnerEntity.ts:18:93)
```
