export const TarsIdl = {
  address: "EDLE5Tnw2x4po1ZGRBYPYVnjKAJAJCJzKFi8RiRuN4xs",
  metadata: {
    name: "tars_staking_nft_program",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "add_multiplier_record",
      discriminator: [198, 196, 230, 73, 42, 247, 137, 18],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_multiplier_record",
          type: {
            defined: {
              name: "MultiplierRecord",
            },
          },
        },
      ],
    },
    {
      name: "batch_stake",
      discriminator: [49, 68, 55, 207, 83, 130, 50, 242],
      accounts: [
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "user_stake_account_one",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(0)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_two",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(1)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_three",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(2)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_four",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(3)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_five",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(4)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_six",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(5)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_seven",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(6)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_eight",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(7)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_nine",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(8)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_ten",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(9)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_eleven",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(10)",
              },
            ],
          },
        },
        {
          name: "user_stake_account_twelve",
          writable: true,
          optional: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_configs.get(11)",
              },
            ],
          },
        },
        {
          name: "admin_acc",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "user_configs",
          type: {
            vec: {
              defined: {
                name: "UserStakeConfiguration",
              },
            },
          },
        },
        {
          name: "staking_start_time",
          type: "i64",
        },
      ],
    },
    {
      name: "change_apr",
      discriminator: [167, 33, 18, 234, 116, 85, 32, 198],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_apr",
          type: "u16",
        },
      ],
    },
    {
      name: "change_exit_fee",
      discriminator: [187, 177, 61, 133, 162, 160, 159, 18],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_exit_fee_percentage",
          type: "u16",
        },
      ],
    },
    {
      name: "change_minimum_lockin_period",
      discriminator: [119, 81, 31, 47, 213, 129, 223, 2],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_minimum_lockin_period",
          type: "u32",
        },
        {
          name: "new_multiplier_for_new_minimum_lockin_period",
          type: {
            option: "u8",
          },
        },
      ],
    },
    {
      name: "change_minimum_stake_amount",
      discriminator: [146, 189, 91, 94, 92, 149, 229, 198],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_minimum_stake_amount",
          type: "u64",
        },
      ],
    },
    {
      name: "change_owner",
      discriminator: [109, 40, 40, 90, 224, 120, 193, 184],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_owner",
          type: "pubkey",
        },
      ],
    },
    {
      name: "close_multiplier_acc",
      discriminator: [118, 6, 92, 173, 204, 107, 183, 198],
      accounts: [
        {
          name: "receiver",
          docs: [
            "CHECK : admix ix, admin signature is required in to validate the constraints",
          ],
          writable: true,
        },
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA", "admin_acc to close"],
        },
        {
          name: "multiplier_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [],
    },
    {
      name: "create_new_nft_tier",
      discriminator: [220, 125, 100, 91, 177, 8, 177, 250],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "payer",
          docs: ["Funding Wallet"],
          writable: true,
          signer: true,
        },
        {
          name: "nft_tier_detail_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [110, 102, 116, 95, 116, 105, 101, 114],
              },
              {
                kind: "arg",
                path: "tier_num",
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
        {
          name: "collection",
          docs: ["The address of the new collection."],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  110, 102, 116, 95, 99, 111, 108, 108, 101, 99, 116, 105, 111,
                  110,
                ],
              },
              {
                kind: "arg",
                path: "tier_num",
              },
            ],
          },
        },
        {
          name: "tai_authority_acc",
          docs: ["The authority on the new asset."],
        },
        {
          name: "mpl_core",
          docs: ["The MPL Core program."],
          address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d",
        },
      ],
      args: [
        {
          name: "tier_num",
          type: "u8",
        },
        {
          name: "points_cost",
          type: "u64",
        },
        {
          name: "emission_rate",
          type: "u64",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "uri",
          type: "string",
        },
      ],
    },
    {
      name: "end_program",
      discriminator: [52, 169, 162, 67, 229, 102, 137, 27],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: "increase_multiplier_config_space",
      discriminator: [224, 84, 184, 74, 41, 34, 33, 124],
      accounts: [
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [],
    },
    {
      name: "increase_stake_or_lockin",
      discriminator: [117, 20, 34, 254, 195, 121, 10, 4],
      accounts: [
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "user_stake_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "account",
                path: "user_authority_signer",
              },
            ],
          },
        },
        {
          name: "user_authority_signer",
          signer: true,
        },
        {
          name: "user_tai_token_acc",
          writable: true,
        },
        {
          name: "tai_program_vault_acc",
          writable: true,
        },
        {
          name: "token_program",
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "stake_amount",
          type: "u64",
        },
        {
          name: "lockin_period",
          type: {
            option: "u32",
          },
        },
      ],
      returns: "u64",
    },
    {
      name: "increase_staking_config_account_space",
      discriminator: [129, 199, 87, 132, 163, 102, 165, 130],
      accounts: [
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [],
    },
    {
      name: "initialize",
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "payer",
          docs: ["Funding Wallet"],
          writable: true,
          signer: true,
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "initial_admin",
          signer: true,
          address: "i3h765SS3M2KvWkdniVWaMjexJQb1EN6WkbqiuepDvE",
        },
        {
          name: "tai_authority_acc",
          docs: ["CHECK : Checked via a validated onchain state acc"],
          writable: true,
          address: "86nHLn1LsqR1QdzvktoTiXQkVhpVhxrBQ8o4i8j5JWZ1",
        },
        {
          name: "tai_program_vault_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 118, 97, 117,
                  108, 116,
                ],
              },
            ],
          },
        },
        {
          name: "tai_mint",
        },
        {
          name: "token_program",
        },
        {
          name: "admin_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "admin_key",
          type: "pubkey",
        },
        {
          name: "staking_config_settings",
          type: {
            defined: {
              name: "StakingConfigurationSettings",
            },
          },
        },
      ],
    },
    {
      name: "initialize_multipliers",
      discriminator: [117, 76, 198, 0, 199, 175, 69, 52],
      accounts: [
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "multiplier_record",
          type: {
            vec: {
              defined: {
                name: "MultiplierRecord",
              },
            },
          },
        },
      ],
    },
    {
      name: "modify_nft_tier_details",
      discriminator: [137, 180, 67, 123, 84, 202, 234, 221],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "nft_tier_detail_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [110, 102, 116, 95, 116, 105, 101, 114],
              },
              {
                kind: "arg",
                path: "tier_num",
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "tier_num",
          type: "u8",
        },
        {
          name: "points_cost",
          type: {
            option: "u64",
          },
        },
        {
          name: "emission_rate",
          type: {
            option: "u64",
          },
        },
      ],
    },
    {
      name: "redeem_nft",
      discriminator: [113, 9, 91, 16, 166, 235, 118, 133],
      accounts: [
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "user_stake_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "account",
                path: "user_authority_signer",
              },
            ],
          },
        },
        {
          name: "user_authority_signer",
          signer: true,
        },
        {
          name: "tai_authority_acc",
          docs: ["CHECK : Checked via a validated onchain state acc"],
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
        {
          name: "nft_tier_account",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [110, 102, 116, 95, 116, 105, 101, 114],
              },
              {
                kind: "arg",
                path: "nft_tier",
              },
            ],
          },
        },
        {
          name: "user_nft_tier_tracker",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  110, 102, 116, 95, 116, 105, 101, 114, 95, 105, 110, 100, 101,
                  120, 101, 114,
                ],
              },
              {
                kind: "account",
                path: "user_stake_account.user_key",
                account: "UserStakeInfo",
              },
              {
                kind: "arg",
                path: "nft_tier",
              },
            ],
          },
        },
        {
          name: "user_nft_timestamp_tracker",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  117, 115, 101, 114, 95, 110, 102, 116, 95, 116, 105, 109, 101,
                  115, 116, 97, 109, 112, 95, 116, 114, 97, 99, 107, 101, 114,
                ],
              },
              {
                kind: "account",
                path: "user_stake_account.user_key",
                account: "UserStakeInfo",
              },
              {
                kind: "arg",
                path: "nft_tier",
              },
              {
                kind: "account",
                path: "user_nft_tier_tracker",
              },
            ],
          },
        },
        {
          name: "asset",
          docs: [
            "CHECK : The address of the new nft asset., checked via pda",
            "seed : static asset seed + user stake account owner + nft tier",
          ],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [110, 102, 116, 95, 97, 115, 115, 101, 116],
              },
              {
                kind: "account",
                path: "user_stake_account.user_key",
                account: "UserStakeInfo",
              },
              {
                kind: "arg",
                path: "nft_tier",
              },
              {
                kind: "account",
                path: "user_nft_tier_tracker",
              },
            ],
          },
        },
        {
          name: "collection",
          docs: ["The collection to which the asset belongs."],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  110, 102, 116, 95, 99, 111, 108, 108, 101, 99, 116, 105, 111,
                  110,
                ],
              },
              {
                kind: "account",
                path: "nft_tier_account.nft_tier",
                account: "NftTierDetails",
              },
            ],
          },
        },
        {
          name: "system_program",
          docs: ["The system program."],
          address: "11111111111111111111111111111111",
        },
        {
          name: "log_wrapper",
          docs: ["The SPL Noop program."],
          optional: true,
        },
        {
          name: "mpl_core",
          address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d",
        },
      ],
      args: [
        {
          name: "tier_num",
          type: "u8",
        },
      ],
    },
    {
      name: "remove_multiplier_record",
      discriminator: [179, 126, 85, 129, 17, 247, 197, 24],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "multiplier_record_to_remove",
          type: {
            defined: {
              name: "MultiplierRecord",
            },
          },
        },
      ],
    },
    {
      name: "stake",
      discriminator: [206, 176, 202, 18, 200, 209, 179, 108],
      accounts: [
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "user_stake_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "arg",
                path: "user_addr",
              },
            ],
          },
        },
        {
          name: "user_authority_signer",
          signer: true,
          optional: true,
        },
        {
          name: "user_tai_token_acc",
          writable: true,
        },
        {
          name: "tai_program_vault_acc",
          writable: true,
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
        {
          name: "token_program",
        },
      ],
      args: [
        {
          name: "stake_amount",
          type: "u64",
        },
        {
          name: "user_addr",
          type: "pubkey",
        },
        {
          name: "lockin_period",
          type: "u32",
        },
      ],
    },
    {
      name: "tweak_multiplier_record",
      discriminator: [218, 167, 83, 224, 250, 113, 253, 115],
      accounts: [
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
        {
          name: "staking_config_account",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "new_multiplier_record",
          type: {
            defined: {
              name: "MultiplierRecord",
            },
          },
        },
        {
          name: "old_multiplier",
          type: "u8",
        },
      ],
    },
    {
      name: "unstake",
      discriminator: [90, 95, 107, 42, 205, 124, 50, 225],
      accounts: [
        {
          name: "staking_config_account",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  116, 97, 105, 95, 115, 116, 97, 107, 101, 95, 99, 111, 110,
                  102, 105, 103,
                ],
              },
            ],
          },
        },
        {
          name: "user_stake_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [117, 115, 101, 114, 95, 115, 116, 97, 107, 101],
              },
              {
                kind: "account",
                path: "user_authority_signer",
              },
            ],
          },
        },
        {
          name: "user_authority_signer",
          signer: true,
        },
        {
          name: "user_tai_token_acc",
          writable: true,
        },
        {
          name: "tai_authority_acc",
          docs: ["CHECK : Checked via a validated onchain state acc"],
        },
        {
          name: "tai_program_vault_acc",
          writable: true,
        },
        {
          name: "token_program",
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
        {
          name: "multiplier_acc",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 97, 99,
                  99,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "unstake_amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdraw_exit_fees",
      discriminator: [228, 124, 153, 89, 129, 74, 128, 230],
      accounts: [
        {
          name: "tai_authority_acc",
          docs: [
            "Configuration Account PDA",
            "CHECK : Checked via a validated onchain state acc",
          ],
        },
        {
          name: "tai_program_vault_acc",
          writable: true,
        },
        {
          name: "token_program",
        },
        {
          name: "admin_exit_fee_receive_token_account",
          writable: true,
        },
        {
          name: "admin_sign",
          docs: ["Signer of the Admin Key"],
          signer: true,
        },
        {
          name: "admin_acc",
          docs: ["Configuration Account PDA"],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [97, 100, 109, 105, 110],
              },
            ],
          },
        },
        {
          name: "staking_stats_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  115, 116, 97, 107, 105, 110, 103, 95, 115, 116, 97, 116, 115,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "withdraw_amount",
          type: {
            option: "u64",
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: "AdminSettings",
      discriminator: [72, 250, 196, 91, 93, 154, 17, 15],
    },
    {
      name: "MultiplierConfig",
      discriminator: [181, 92, 4, 234, 240, 56, 88, 127],
    },
    {
      name: "NftTierDetails",
      discriminator: [119, 1, 234, 116, 162, 215, 18, 96],
    },
    {
      name: "StakingConfiguration",
      discriminator: [42, 151, 207, 209, 7, 27, 30, 227],
    },
    {
      name: "StakingStats",
      discriminator: [166, 5, 189, 163, 53, 97, 113, 241],
    },
    {
      name: "UserNftTierTracker",
      discriminator: [226, 114, 148, 147, 153, 109, 48, 147],
    },
    {
      name: "UserNftTimeStampTracker",
      discriminator: [19, 215, 247, 54, 1, 69, 75, 166],
    },
    {
      name: "UserStakeInfo",
      discriminator: [219, 233, 236, 123, 28, 113, 89, 56],
    },
  ],
  types: [
    {
      name: "AdminSettings",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin_key",
            type: "pubkey",
          },
        ],
      },
    },
    {
      name: "AprChangeRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "apr_change_timestamp",
            type: "i64",
          },
          {
            name: "new_apr",
            type: "u16",
          },
        ],
      },
    },
    {
      name: "MultiplierConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "multiplier_records",
            type: {
              vec: {
                defined: {
                  name: "MultiplierRecord",
                },
              },
            },
          },
        ],
      },
    },
    {
      name: "MultiplierRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "minimum_lockin_period",
            type: "u32",
          },
          {
            name: "multiplier",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "NftTierDetails",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "nft_tier",
            type: "u8",
          },
          {
            name: "points_cost",
            type: "u64",
          },
          {
            name: "emission_rate",
            type: "u64",
          },
          {
            name: "nft_count",
            type: "u32",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "uri",
            type: "string",
          },
        ],
      },
    },
    {
      name: "OnClaim",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user",
            type: "pubkey",
          },
          {
            name: "cost_of_nft",
            type: "u64",
          },
          {
            name: "nft_collection_addr",
            type: "pubkey",
          },
        ],
      },
    },
    {
      name: "OnExitFeesWithdraw",
      type: {
        kind: "struct",
        fields: [
          {
            name: "exit_fee_withdrawed",
            type: "u64",
          },
          {
            name: "timestamp",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "OnRestake",
      type: {
        kind: "struct",
        fields: [
          {
            name: "additional_stake_amount",
            type: "u64",
          },
          {
            name: "user",
            type: "pubkey",
          },
          {
            name: "lockin_period",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "OnStake",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stake_amount",
            type: "u64",
          },
          {
            name: "user",
            type: "pubkey",
          },
          {
            name: "lockin_period",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "OnUnstake",
      type: {
        kind: "struct",
        fields: [
          {
            name: "unstake_amount",
            type: "u64",
          },
          {
            name: "user",
            type: "pubkey",
          },
          {
            name: "exit_fee",
            type: "u64",
          },
          {
            name: "amount_released",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "StakingConfiguration",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "minimum_stake_amount",
            type: "u64",
          },
          {
            name: "program_start_time",
            type: "i64",
          },
          {
            name: "minimum_lockin_period",
            type: "u32",
          },
          {
            name: "exit_fee_percentage",
            type: "u16",
          },
          {
            name: "end_date",
            type: {
              option: "i64",
            },
          },
          {
            name: "apy_changes",
            type: {
              vec: {
                defined: {
                  name: "AprChangeRecord",
                },
              },
            },
          },
        ],
      },
    },
    {
      name: "StakingConfigurationSettings",
      type: {
        kind: "struct",
        fields: [
          {
            name: "minimum_stake_amount",
            type: "u64",
          },
          {
            name: "program_start_time",
            type: "i64",
          },
          {
            name: "minimum_lockin_period",
            type: "u32",
          },
          {
            name: "exit_fee_percentage",
            type: "u16",
          },
          {
            name: "new_apr",
            type: "u16",
          },
        ],
      },
    },
    {
      name: "StakingStats",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "accumulated_exit_fees",
            type: "u64",
          },
          {
            name: "total_stake_amount",
            type: "u64",
          },
          {
            name: "total_users",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "UserNftTierTracker",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "nfts_minted",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "UserNftTimeStampTracker",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "time_stamp_minted_at",
            type: {
              vec: "i64",
            },
          },
        ],
      },
    },
    {
      name: "UserStakeConfiguration",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user_addr",
            type: "pubkey",
          },
          {
            name: "stake_amount",
            type: "u64",
          },
          {
            name: "lockin_period",
            type: "u32",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "UserStakeInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user_key",
            type: "pubkey",
          },
          {
            name: "stake_amount",
            type: "u64",
          },
          {
            name: "last_synced",
            type: "i64",
          },
          {
            name: "total_points",
            type: "u64",
          },
          {
            name: "lockin_period",
            type: "u32",
          },
          {
            name: "current_apr",
            type: "u16",
          },
          {
            name: "staking_start_timestamp",
            type: "i64",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
};
